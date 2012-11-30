package org.ssoward.websocket;

import org.eclipse.jetty.websocket.WebSocket;

import java.io.IOException;

/**
 * Created by IntelliJ IDEA.
 * User: ssoward
 * Date: 11/28/12
 * Time: 7:58 AM
 * To change this template use File | Settings | File Templates.
 */
public class MyWebSocket implements WebSocket.OnTextMessage {
    private Connection connection;

    public void onMessage(String s) {
        System.out.println(s);
        try {
            connection.sendMessage(s + "comming from server");
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        }
    }

    public void onOpen(Connection connection) {
        this.connection = connection;
        System.out.println("connection: "+ connection);
    }

    public void onClose(int i, String s) {
        System.out.println("closed connection");
    }
}
