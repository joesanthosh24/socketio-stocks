const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");

const server = http.createServer(app);
const io = new Server(server);

const stock_tickers = ["NDAQ", "DIJA", "SPX"];

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("Connected");
});

server.listen(3000, () => {
  console.log("Listening on port 3000");
});