package com.h3c.imc.rs.client;

import static junit.framework.Assert.assertEquals;
import static junit.framework.Assert.fail;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.UsernamePasswordCredentials;
import org.apache.commons.httpclient.auth.AuthScope;
import org.apache.commons.httpclient.params.HttpConnectionManagerParams;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.client.CommonsClientHttpRequestFactory;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import com.h3c.imc.rs.entity.ListResult;
import com.h3c.imc.rs.usr.entity.User;

/** ”√ SpringFramework RestTemplate Ω¯––≤‚ ‘°£ */
public class RestTemplateTest {

    private static RestTemplate restTemplate = null;

    @BeforeClass
    public static void setup() {
        HttpClient client = new HttpClient();
        HttpConnectionManagerParams params =
            client.getHttpConnectionManager().getParams();
        params.setConnectionTimeout(5000);
        params.setSoTimeout(5000);
        params.setSendBufferSize(8192);
        params.setReceiveBufferSize(8192);
        client.getState().setCredentials(
            new AuthScope("localhost", 8080, "iMC RESTful Web Services"),
            new UsernamePasswordCredentials("admin", "admin"));
        restTemplate = new RestTemplate(new CommonsClientHttpRequestFactory(client));
    }

    @AfterClass
    public static void teardown() {
    }

    @Test
    public void testOptions() {
        System.out.println(
            restTemplate.optionsForAllow("http://localhost:8080/imcrs/user"));
    }

    @Test
    public void testQuery() {
        ListResult<?> result = restTemplate.getForObject(
            "http://localhost:8080/imcrs/user", ListResult.class);
        assertEquals(10, result.getData().size());
        result = restTemplate.getForObject(
            "http://localhost:8080/imcrs/user?start={start}&size={size}",
            ListResult.class, 60, 10);
        assertEquals(5, result.getData().size());
    }

    @Test
    public void testAdd() {
        ResponseEntity<User> entity = restTemplate.postForEntity(
            "http://localhost:8080/imcrs/user",
            new User("User_Name", "User_Cert"), null);
        assertEquals(HttpStatus.CREATED, entity.getStatusCode());
        assertEquals("http://localhost:8080/imcrs/user/65",
            entity.getHeaders().getFirst("Location"));

        assertEquals("http://localhost:8080/imcrs/user/66",
            restTemplate.postForLocation("http://localhost:8080/imcrs/user",
                new User("User_Name_1", "User_Cert_1")).toString());
    }

    @Test
    public void testUpdate() {
        User user = restTemplate.getForObject("http://localhost:8080/imcrs/user/65",
            User.class);
        assertEquals("User_Name", user.getUserName());
        assertEquals("User_Cert", user.getCertification());
        user.setUserName("User_Name_1");
        user.setCertification("User_Cert_1");
        restTemplate.put("http://localhost:8080/imcrs/user/65", user);
        user = restTemplate.getForObject("http://localhost:8080/imcrs/user/65",
            User.class);
        assertEquals("User_Name_1", user.getUserName());
        assertEquals("User_Cert_1", user.getCertification());
    }

    @Test
    public void testDelete() {
        restTemplate.delete("http://localhost:8080/imcrs/user/{id}", 65);
        try {
            restTemplate.delete("http://localhost:8080/imcrs/user/{id}", 65);
            fail("An exception should be thrown");
        } catch (HttpStatusCodeException hsce) {
            assertEquals(HttpStatus.GONE, hsce.getStatusCode());
        }
    }
}
