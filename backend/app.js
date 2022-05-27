const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// DADOS DE CONEXÃO COM O MONGO DB
// let senha = require("./senha.js")
// let nomeBanco = 'teste01'
// let userName = 'mamorim'
// let clusterUrl = '@clusterteste1.vcnmu.mongodb.net/'
// let connectionString = `mongodb+srv://${userName}:${senha}${clusterUrl}${nomeBanco}?retryWrites=true&w=majority`

mongoose
  .connect(
    "mongodb+srv://user_20221:user_20221@cluster0.skf8n.mongodb.net/app-mean?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(() => {
    console.log("errouuuu");
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());

const Cliente = require("./models/cliente");

const clientes = [
  {
    id: "1",
    nome: "Ana",
    fone: "12345678",
    email: "ana@email.com",
  },
  {
    id: "2",
    nome: "Gil",
    fone: "87654321",
    email: "gil@email.com",
  },
  {
    id: "3",
    nome: "Bia",
    fone: "87654321",
    email: "bia@email.com",
  },
];

app.get("/api/clientes", (req, res, next) => {
  Cliente.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents,
    });
  });
});

app.post("/api/clientes", (req, res, next) => {
  console.log("Recebi request POST na rota /api/clientes ", req.body);
  const cliente = new Cliente({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
  });
  console.log(cliente);
  cliente.save().then((clienteInserido) => {
    res.status(201).json({
      mensagem: "Cliente inserido",
      id: clienteInserido._id,
    });
  });
});

app.delete("/api/clientes/:id", (req, res, next) => {
  Cliente.deleteOne({ _id: req.params.id }).then((resultado) => {
    console.log(resultado);
    res.status(200).json({ mensagem: "Cliente removido com sucesso" });
  });
});

app.put("/api/clientes/:id", (req, res, next) => {
  const cliente = new Cliente({
    _id: req.params.id,
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email,
  });
  Cliente.updateOne({ _id: req.params.id }, cliente).then((resultado) => {
    console.log(resultado);
  });
  res.status(200).json({ mensagem: "Atualização realizada com sucesso" });
});

module.exports = app;
