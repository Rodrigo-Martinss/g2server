const express = require("express");
const cors = require("cors");
const server = express();

const db = require('../models/db');

server.use(cors());
server.use(express.json());

const port = 3333;

const visitas = [];

server.get("/", (request, response) => {
  return response.json(visitas);
});

server.post("/createuser", (request, response) => {
  const data = request.body;
  console.log(data);

  const visita = {
    tecnico: data.tecnico,
    cliente: data.cliente,
    solicitacao: data.solicitacao,
  };

  visitas.push(visita);

  return response.status(200).json("usuário cadastrado com sucesso");
});

server.listen(port, () => {
  console.log("server rodando na porta 3333");
});
