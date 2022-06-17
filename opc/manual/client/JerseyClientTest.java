package com.h3c.imc.rs.client;

import static junit.framework.Assert.assertEquals;

import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response.Status;
import javax.ws.rs.core.UriBuilder;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.Test;

import com.h3c.imc.rs.entity.ListResult;
import com.h3c.imc.rs.usr.entity.User;
import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.ClientResponse;
import com.sun.jersey.api.client.WebResource;
import com.sun.jersey.client.apache.ApacheHttpClient;
import com.sun.jersey.client.apache.config.DefaultApacheHttpClientConfig;

/** ”√ Jersey Client Ω¯––≤‚ ‘°£ */
public class JerseyClientTest {

    private static Client client = null;

    @BeforeClass
    public static void setup() {
        DefaultApacheHttpClientConfig config = new DefaultApacheHttpClientConfig();
        config.getState().setCredentials("iMC RESTful Web Services",
            "localhost", 8080, "admin", "admin");
        client = ApacheHttpClient.create(config);
        client.setFollowRedirects(true);
        client.setReadTimeout(5000);
        client.setConnectTimeout(5000);
    }

    @AfterClass
    public static void teardown() {
        client.destroy();
    }

    @Test
    public void testOptions() throws Exception {
        WebResource r = client.resource("http://localhost:8080/imcrs/user");
        ClientResponse resp = r.accept(MediaType.APPLICATION_XML).options(ClientResponse.class);
        assertEquals(Status.OK.getStatusCode(), resp.getStatus());
        System.out.println(resp.getAllow());
        System.out.println(resp.getEntity(String.class));
    }

    @Test
    public void testQuery() {
        WebResource r = client.resource("http://localhost:8080/imcrs/user");
        ListResult<?> result = r.accept(MediaType.APPLICATION_XML).get(ListResult.class);
        assertEquals(10, result.getData().size());
        UriBuilder builder = UriBuilder.fromPath("http://localhost:8080/imcrs/user")
            .queryParam("start", 60).queryParam("size", 10);
        r = client.resource(builder.build());
        result = r.accept(MediaType.APPLICATION_XML).get(ListResult.class);
        assertEquals(5, result.getData().size());
    }

    @Test
    public void testAdd() {
        WebResource r = client.resource("http://localhost:8080/imcrs/user");
        ClientResponse resp = r.accept(MediaType.APPLICATION_XML).post(
            ClientResponse.class, new User("User_Name", "User_Cert"));
        assertEquals(Status.CREATED.getStatusCode(), resp.getStatus());
        assertEquals("http://localhost:8080/imcrs/user/65",
            resp.getHeaders().getFirst("Location"));
    }

    @Test
    public void testUpdate() {
        WebResource r1 = client.resource("http://localhost:8080/imcrs/user/65");
        User user = r1.accept(MediaType.APPLICATION_XML).get(User.class);
        assertEquals("User_Name", user.getUserName());
        assertEquals("User_Cert", user.getCertification());
        user.setUserName("User_Name_1");
        user.setCertification("User_Cert_1");

        WebResource r2 = client.resource("http://localhost:8080/imcrs/user/65");
        ClientResponse resp = r2.accept(MediaType.APPLICATION_XML).put(ClientResponse.class, user);
        assertEquals(Status.NO_CONTENT.getStatusCode(), resp.getStatus());

        user = r1.get(User.class);
        assertEquals("User_Name_1", user.getUserName());
        assertEquals("User_Cert_1", user.getCertification());
    }

    @Test
    public void testDelete() {
        WebResource r1 = client.resource("http://localhost:8080/imcrs/user/65");
        ClientResponse resp = r1.delete(ClientResponse.class);
        assertEquals(Status.NO_CONTENT.getStatusCode(), resp.getStatus());

        resp = r1.delete(ClientResponse.class);
        assertEquals(Status.GONE.getStatusCode(), resp.getStatus());
    }
}
