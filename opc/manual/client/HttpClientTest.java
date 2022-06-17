package com.h3c.imc.rs.client;

import static junit.framework.Assert.assertEquals;

import java.util.ArrayList;
import java.util.List;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;

import org.apache.http.HttpEntity;
import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.NameValuePair;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.methods.HttpDelete;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpOptions;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.client.params.ClientPNames;
import org.apache.http.client.utils.URIUtils;
import org.apache.http.client.utils.URLEncodedUtils;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.conn.scheme.PlainSocketFactory;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.scheme.SchemeRegistry;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.util.EntityUtils;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;

/** 用 Apache Commons HTTP Client 进行测试。 */
public class HttpClientTest {

    private static DefaultHttpClient client = null;

    private static HttpHost defaultHost = new HttpHost("localhost", 8080, "http");

    @Before
    public void setUp() throws Exception {
        // 同时支持 http 和 https
        SSLContext sc = SSLContext.getInstance("TLS");
        sc.init(null, new TrustManager[] { new TrustAnyTrustManager() }, null);
        SchemeRegistry registry = new SchemeRegistry();
        registry.register(new Scheme("http", 8080, PlainSocketFactory.getSocketFactory()));
        registry.register(new Scheme("https", 8443, new SSLSocketFactory(sc,
            SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER)));
        ClientConnectionManager ccm = new ThreadSafeClientConnManager(registry);
        client = new DefaultHttpClient(ccm);

        HttpParams params = client.getParams();
        HttpConnectionParams.setConnectionTimeout(params, 5000);
        HttpConnectionParams.setSoTimeout(params, 5000);
        HttpConnectionParams.setSocketBufferSize(params, 8192);
        params.setParameter(ClientPNames.DEFAULT_HOST, defaultHost);

        // 认证信息
        client.getCredentialsProvider().setCredentials(
            new AuthScope("localhost", 8080, "iMC RESTful Web Services"),
            new UsernamePasswordCredentials("admin", "admin"));
        client.getCredentialsProvider().setCredentials(
            new AuthScope("localhost", 8443, "iMC RESTful Web Services"),
            new UsernamePasswordCredentials("admin", "admin"));
    }

    @AfterClass
    public static void teardown() {
        client.getConnectionManager().shutdown();
    }

    @Test
    public void testOptions() throws Exception {
        HttpOptions opt = new HttpOptions("/imcrs/user");
        opt.addHeader("accept", "application/xml");

        try {
            HttpResponse response = client.execute(opt);
            assertEquals(HttpStatus.SC_OK, response.getStatusLine().getStatusCode());
            System.out.println(response.getFirstHeader("Allow"));
            System.out.println(EntityUtils.toString(response.getEntity()));
        } finally {
            opt.abort();
        }
    }

    @Test
    public void testQuery() throws Exception {
        HttpGet get = new HttpGet("/imcrs/user");
        get.addHeader("accept", "application/xml");
        try {
            HttpResponse response = client.execute(get);
            assertEquals(HttpStatus.SC_OK, response.getStatusLine().getStatusCode());
            System.out.println(EntityUtils.toString(response.getEntity()));
            get.abort();

            List<NameValuePair> qparams = new ArrayList<NameValuePair>();
            qparams.add(new BasicNameValuePair("start", "10"));
            qparams.add(new BasicNameValuePair("size", "10"));
            get = new HttpGet(URIUtils.createURI(defaultHost.getSchemeName(),
                defaultHost.getHostName(), defaultHost.getPort(),
                "/imcrs/user", URLEncodedUtils.format(qparams, "UTF-8"), null));
            response = client.execute(get);
            assertEquals(HttpStatus.SC_OK, response.getStatusLine().getStatusCode());
            System.out.println(EntityUtils.toString(response.getEntity()));
        } finally {
            // 是否 GET 方法使用的所有资源
            get.abort();
        }
    }

    @Test
    public void testAdd() throws Exception {
        HttpPost post = new HttpPost("/imcrs/user");
        post.addHeader("accept", "application/xml");
        HttpEntity entity = new StringEntity(
            "<user><userName>User_TEST" +
            "</userName><certification>CERT_TEST</certification></user>",
            "application/xml", "UTF-8");
        post.setEntity(entity);
        try {
            HttpResponse response = client.execute(post);
            assertEquals(HttpStatus.SC_CREATED, response.getStatusLine().getStatusCode());
            assertEquals(defaultHost.toURI() + "/imcrs/user/65",
                response.getFirstHeader("Location").getValue());
        } finally {
            post.abort();
        }
    }

    @Test
    public void testUpdate() throws Exception {
        HttpPut put = new HttpPut("/imcrs/user/65");
        HttpEntity entity = new StringEntity(
            "<?xml version='1.0' encoding='UTF-8'?><user><id>65</id><userName>" +
            "User_TEST_1</userName><certification>CERT_TEST_1</certification></user>",
            "application/xml", "UTF-8");
        put.setEntity(entity);
        try {
            HttpResponse response = client.execute(put);
            assertEquals(HttpStatus.SC_NO_CONTENT, response.getStatusLine().getStatusCode());
        } finally {
            put.abort();
        }
    }

    @Test
    public void testDelete() throws Exception {
        HttpDelete delete = new HttpDelete("/imcrs/user/65");
        try {
            HttpResponse response = client.execute(delete);
            assertEquals(HttpStatus.SC_NO_CONTENT, response.getStatusLine().getStatusCode());
            delete.abort();
            delete = new HttpDelete("/imcrs/user/65");
            response = client.execute(delete);;
            assertEquals(HttpStatus.SC_GONE, response.getStatusLine().getStatusCode());
        } finally {
            delete.abort();
        }
    }
}
