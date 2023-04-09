const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const port = 3333;

const users = [
  {
    id: 1,
    name: "joao",
  },
  {
    id: 2,
    name: "Davi",
  },
];

server.get("/", (request, response) => {
  return response.json(users);
});

server.post("/createuser", (request, response) => {
  const data = request.body;
  console.log(data);

  const user = {
    id: data.id,
    name: data.name,
  };

  users.push(user);

  return response.status(200).json("usuário cadastrado com sucesso");
});

server.listen(port, () => {
  console.log("server rodando na porta 3333");
});
