import java.io.IOException;
import java.net.Socket;
import java.net.UnknownHostException;
import java.security.KeyManagementException;
import java.security.KeyStore;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;
import java.security.UnrecoverableKeyException;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;

import javax.net.ssl.SSLContext;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.HttpVersion;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.params.ClientPNames;
import org.apache.http.client.params.HttpClientParams;
import org.apache.http.conn.ClientConnectionManager;
import org.apache.http.conn.scheme.PlainSocketFactory;
import org.apache.http.conn.scheme.Scheme;
import org.apache.http.conn.scheme.SchemeRegistry;
import org.apache.http.conn.ssl.SSLSocketFactory;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;
import org.apache.http.params.BasicHttpParams;
import org.apache.http.params.HttpConnectionParams;
import org.apache.http.params.HttpParams;
import org.apache.http.params.HttpProtocolParams;
import org.apache.http.protocol.HTTP;


public class AndroidTest {
    static String schema = "http";
    static String host = "localhost";
    static int port = 8080;
    static String name = "admin";
    static String passwd = "admin";

    public static void main(String[] args) throws Exception {
        HttpParams params = new BasicHttpParams();
        HttpProtocolParams.setVersion(params, HttpVersion.HTTP_1_1);
        HttpProtocolParams.setContentCharset(params, HTTP.UTF_8);
        HttpProtocolParams.setUserAgent(params, "iMC Mobile Client");
        HttpConnectionParams.setConnectionTimeout(params, 5000);
        HttpConnectionParams.setSocketBufferSize(params, 8192);
        HttpClientParams.setRedirecting(params, true);
        params.setParameter(ClientPNames.DEFAULT_HOST,
            new HttpHost(host, port, schema));

        SchemeRegistry registry = new SchemeRegistry();
        if ("http".equals(schema)) {
            registry.register(new Scheme("http",
                PlainSocketFactory.getSocketFactory(), port));
        } else if ("https".equals(schema)) {
            KeyStore trustStore = KeyStore.getInstance(KeyStore.getDefaultType());
            trustStore.load(null, null);
            SSLSocketFactory sslf = new TrustAnySSLSocketFactory(trustStore);
            sslf.setHostnameVerifier(SSLSocketFactory.ALLOW_ALL_HOSTNAME_VERIFIER);
            registry.register(new Scheme("https", sslf, port));
        }

        ClientConnectionManager ccm =
            new ThreadSafeClientConnManager(params, registry);
        DefaultHttpClient client = new DefaultHttpClient(ccm, params);

        client.getCredentialsProvider().setCredentials(
            new AuthScope(host, port, "iMC RESTful Web Services"),
            new UsernamePasswordCredentials(name, passwd));

        HttpGet get = new HttpGet("/imcrs/plat/res/device");
        get.addHeader("accept", "application/xml");
        HttpResponse resp = client.execute(get);
        System.out.println(resp.getStatusLine().getStatusCode());
    }

    static class TrustAnySSLSocketFactory extends SSLSocketFactory {

        SSLContext sslContext = SSLContext.getInstance("TLS");

        public TrustAnySSLSocketFactory(KeyStore truststore)
            throws NoSuchAlgorithmException, KeyManagementException,
            KeyStoreException, UnrecoverableKeyException {
            super(truststore);
            TrustManager tm = new X509TrustManager() {
                public void checkClientTrusted(X509Certificate[] chain,
                    String authType) throws CertificateException {
                }
                public void checkServerTrusted(X509Certificate[] chain,
                    String authType) throws CertificateException {
                }
                public X509Certificate[] getAcceptedIssuers() {
                    return null;
                }
            };
            sslContext.init(null, new TrustManager[] { tm }, null);
        }

        @Override
        public Socket createSocket(Socket socket, String host, int port,
            boolean autoClose) throws IOException, UnknownHostException {
            return sslContext.getSocketFactory().createSocket(socket, host,
                port, autoClose);
        }

        @Override
        public Socket createSocket() throws IOException {
            return sslContext.getSocketFactory().createSocket();
        }
    }
}
