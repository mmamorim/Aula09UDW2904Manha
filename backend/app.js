const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const clienteRoutes = require('./rotas/clientes');

mongoose
  .connect(
    "mongodb+srv://user_20221:user_20221@cluster0.skf8n.mongodb.net/app-mean?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Conexão OK");
  })
  .catch(() => {
    console.log("Conexão NOK");
  });

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/clientes', clienteRoutes);

module.exports = app;
