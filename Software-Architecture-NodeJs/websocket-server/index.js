const express = require("express");
var path = require("path");
const http = require("http");
const WebSocket = require("ws");

const app = express();

/** Inicializando servidor HTTP */
const server = http.createServer(app);
/** Inicializando conexão websocket através do servidor HTTP 
*(protocolo websocket também deve aceitar protocolo http pois
o mesmo é inicializado a partir do http.) */
const wss = new WebSocket.Server({ server });

/** Será chamado a cada conexão websocket.
 * Métodos internos são ouvidos para cada conexão websocket
 */
wss.on("connection", (ws) => {
  ws.send("oi cabeça de bagre");

  ws.on("message", (message) => {
    console.log("Mensagem recebida: ", message);
    /**Envia mensagem para o cliente */
    ws.send(message);
  });
});

/**Inicializando o servidor */
server.listen(process.env.PORT || 9898, () => {
  console.log("Servidor conectado na porta: ", server.address().port);
});
