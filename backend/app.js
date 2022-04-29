const express = require ('express');
const app = express();

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
  }
]

app.use('/api/clientes', (req,res,next) => {
  res.status(200).json({
    mensagem: "Tudo certo",
    clientes: clientes
  });
});
module.exports = app;
