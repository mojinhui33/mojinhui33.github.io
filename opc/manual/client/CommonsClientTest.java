package com.h3c.imc.rs.client;

import static junit.framework.Assert.assertEquals;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpStatus;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.UsernamePasswordCredentials;
import org.apache.commons.httpclient.auth.AuthScope;
import org.apache.commons.httpclient.methods.DeleteMethod;
import org.apache.commons.httpclient.methods.GetMethod;
import org.apache.commons.httpclient.methods.OptionsMethod;
import org.apache.commons.httpclient.methods.PostMethod;
import org.apache.commons.httpclient.methods.PutMethod;
import org.apache.commons.httpclient.methods.RequestEntity;
import org.apache.commons.httpclient.methods.StringRequestEntity;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

/** �� Apache Commons HTTP Client ���в��ԡ� */
public class CommonsClientTest {

    private static HttpClient client = null;

    @BeforeClass
    public static void setup() {
        client = new HttpClient();
        HttpConnectionManagerParams params =
            client.getHttpConnectionManager().getParams();
        params.setConnectionTimeout(5000);
        params.setSoTimeout(50000);
        params.setSendBufferSize(8192);
        params.setReceiveBufferSize(8192);
        // ʹ�� HTTP ����
        client.getHostConfiguration().setHost("localhost", 8080);
        client.getState().setCredentials(
            new AuthScope("localhost", 8080, "iMC RESTful Web Services"),
            new UsernamePasswordCredentials("admin", "admin"));
        // ʹ�� HTTPS
        // ��Ҫ��Commons HTTP Client �޷�ʹ�� HTTPS��ԭ�����£�
        // ����������Ķ˿ڲ���ȱʡ 443���䱨��ͷ�� host ֵΪ host�������� host:port
        // ���·������˽���Ϊȱʡ�˿ڣ����ص��������Ӷ������˿ڣ��������ʻ����
//        Protocol easyhttps = new Protocol("https",
//            new EasySSLProtocolSocketFactory(), 8443);
//        client.getHostConfiguration().setHost("localhost", 8443, easyhttps);
//        client.getState().setCredentials(
//            new AuthScope("localhost", 8443, "iMC RESTful Web Services"),
//            new UsernamePasswordCredentials("admin", "admin"));
    }

    @AfterClass
    public static void teardown() {
        client.getHttpConnectionManager().closeIdleConnections(0);
    }

    @Test
    public void testOptions() throws Exception {
        OptionsMethod opt = new OptionsMethod("/imcrs/user");
        opt.setDoAuthentication(true);
        opt.addRequestHeader("accept", "application/xml");
        try {
            assertEquals(HttpStatus.SC_OK, client.executeMethod(opt));
            System.out.println(opt.getResponseHeader("Allow"));
            System.out.println(opt.getResponseBodyAsString());
        } finally {
            opt.releaseConnection();
        }
    }

    @Test
    public void testQuery() throws Exception {
        GetMethod get = new GetMethod("/imcrs/user");
        get.addRequestHeader("accept", "application/xml");
        try {
            assertEquals(HttpStatus.SC_OK, client.executeMethod(get));
            System.out.println(get.getResponseBodyAsString());
            get.releaseConnection();

            get.setQueryString(new NameValuePair[] {
                new NameValuePair("start", "10"), new NameValuePair("size", "10"),
                new NameValuePair("orderBy", "id")});
            assertEquals(HttpStatus.SC_OK, client.executeMethod(get));
            System.out.println(get.getResponseBodyAsString());
            get.releaseConnection();

            get.setQueryString(new NameValuePair[] { new NameValuePair("total", "true") });
            assertEquals(HttpStatus.SC_OK, client.executeMethod(get));
            assertEquals(65, Integer.parseInt(get.getResponseHeader("Total").getValue()));

            // ���ڲ��Ի���
            final int count = 1;
            for (int i = 0; i < count; i++) {
                get = new GetMethod("/imcrs/user/1");
                get.addRequestHeader("accept", "application/xml");
                assertEquals(HttpStatus.SC_OK, client.executeMethod(get));
                System.out.println(get.getResponseBodyAsString());
            }
        } finally {
            // �ͷ� GET ����ʹ�õ�������Դ
            get.releaseConnection();
        }
    }

    @Test
    public void testAdd() throws Exception {
        PostMethod post = new PostMethod("/imcrs/user");
        RequestEntity entity = new StringRequestEntity(
            "<user><userName>User_TEST" +
            "</userName><certification>CERT_TEST</certification></user>",
            "application/xml", "UTF-8");
        post.setRequestEntity(entity);
        post.addRequestHeader("accept", "application/xml");
        try {
            assertEquals(HttpStatus.SC_CREATED, client.executeMethod(post));
            assertEquals("http://localhost:8080/imcrs/user/65",
                post.getResponseHeader("Location").getValue());
        } finally {
            post.releaseConnection();
        }
    }

    @Test
    public void testUpdate() throws Exception {
        PutMethod put = new PutMethod("/imcrs/user/65");
        RequestEntity entity = new StringRequestEntity(
            "<?xml version='1.0' encoding='UTF-8'?><user><id>65</id><userName>" +
            "User_TEST_1</userName><certification>CERT_TEST_1</certification></user>",
            "application/xml", "UTF-8");
        put.setRequestEntity(entity);
        try {
            assertEquals(HttpStatus.SC_NO_CONTENT, client.executeMethod(put));
        } finally {
            put.releaseConnection();
        }
    }

    @Test
    public void testDelete() throws Exception {
        DeleteMethod delete = new DeleteMethod("/imcrs/user/65");
        try {
            assertEquals(HttpStatus.SC_NO_CONTENT, client.executeMethod(delete));
            assertEquals(HttpStatus.SC_GONE, client.executeMethod(delete));
        } finally {
            delete.releaseConnection();
        }
    }
}
