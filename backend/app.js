const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// DADOS DE CONEXÃO COM O MONGO DB
// let senha = require("./senha.js")
// let nomeBanco = 'teste01'
// let userName = 'mamorim'
// let clusterUrl = '@clusterteste1.vcnmu.mongodb.net/'
// let connectionString = `mongodb+srv://${userName}:${senha}${clusterUrl}${nomeBanco}?retryWrites=true&w=majority`

mongoose.connect('mongodb+srv://kiro-mean6:kiro-mean6@cluster0.g1pqb.mongodb.net/appmean?retryWrites=true&w=majority')
.then(()=>{
  console.log('Conexão OK');
})
.catch(()=>{
  console.log('errouuuu');
})

const app = express();
app.use(cors());
app.use(bodyParser.json());


const Cliente = require('./models/cliente');

const clientes = [
  {
    id: '1',
    nome: 'Ana',
    fone: '12345678',
    email: 'ana@email.com'
  },
  {
    id: '2',
    nome: 'Gil',
    fone: '87654321',
    email: 'gil@email.com'
  },
  {
    id: '3',
    nome: 'Bia',
    fone: '87654321',
    email: 'bia@email.com'
  }
]

app.get('/api/clientes', (req, res, next) => {
  Cliente.find().then(documents => {
    res.status(200).json({
      mensagem: "Tudo OK",
      clientes: documents
    });
  })
});

app.post('/api/clientes', (req, res, next) => {
  console.log("Recebi request POST na rota /api/clientes ", req.body);
  const cliente = new Cliente({
    nome: req.body.nome,
    fone: req.body.fone,
    email: req.body.email
  })
  console.log(cliente);
  cliente.save();
  res.status(201).json({ mensagem: 'Cliente inserido' })
});
console.log("adicionado rota POST /api/clientes");


module.exports = app;
