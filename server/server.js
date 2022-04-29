
// ES modules

import express from "express"
import bodyParser from "body-parser"
import cors from "cors"

import filmes from "./controllers/filmes.js"
import produtos from "./controllers/produtos.js"
import clientes from "./controllers/clientes.js"

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use (bodyParser.json());

app.get("/", function(req,res) {
    res.json({ algo: "alguma coisa", msg: "uma menssagem" })
});

// Rotas de filmes adicionadas
filmes(app)
// Rotas de filmes adicionadas
produtos(app)
// Rotas de clientes adicionadas
clientes(app)

let port = 3000;
app.listen(port,function() {
    console.log("Servidor iniciado e escutando na porta "+port);
});
