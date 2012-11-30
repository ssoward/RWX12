package org.ssoward.websocket;

import org.eclipse.jetty.websocket.WebSocket;
import org.eclipse.jetty.websocket.WebSocketServlet;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by IntelliJ IDEA.
 * User: ssoward
 * Date: 11/28/12
 * Time: 7:41 AM
 * To change this template use File | Settings | File Templates.
 */
public class RWXWebSocketServlet extends WebSocketServlet{
    public WebSocket doWebSocketConnect(HttpServletRequest httpServletRequest, String s) {
        System.out.println("001");
        return new MyWebSocket();
    }

}
