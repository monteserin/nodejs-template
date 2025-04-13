import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

import { config } from "@Application/config/sockets";
import Middlewares from "./application/middlewares";
import { Routes, Sockets } from "./entities";
import Documentation from "./application/documentation";
import ConnectDatabase from "./application/database";

const app = express();
const port = process.env.PORT;
const server = http.createServer(app);
const io = new Server(server, config);

ConnectDatabase(() => {
  Documentation(app);
  Middlewares(app, io);
  Routes(app);

  io.on("connection", (socket) => {
    console.log(88);
    Sockets(io, socket);
  });

  server.listen(port, () => {
    console.log(`Server listening to http://localhost:${port}`);
  });
});
