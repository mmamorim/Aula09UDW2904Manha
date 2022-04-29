
const routeName = "/filmes"

const filmes = {
    f01: {
        id: "f01",
        nome: "O Vento levou",
        ano: 1970
    },
    f02: {
        id: "f02",
        nome: "ET - Extra Terrestre",
        ano: 1980    
    }
}

export default function (app) {

    app.get(routeName, function (req, res) {
        res.json(filmes)
    });

    app.get(routeName+"/:id", function (req, res) {
        console.log(req.params);
        res.json(filmes[req.params.id])
    });

    app.post(routeName, function (req, res) {
        console.log(req.body);
        if(filmes[req.body.id] != undefined) {
            res.status(401).send("erro")
        }
        filmes[req.body.id] = {
            nome: req.body.nome,
            ano: req.body.ano
        }
        res.json(filmes[req.body.id])
    });

    app.put(routeName, function (req, res) {
        console.log(req.body);
        if(filmes[req.body.id] == undefined) {
            res.status(401).send("erro")
        }
        filmes[req.body.id] = {
            nome: req.body.nome,
            ano: req.body.ano
        }
        res.json(filmes[req.body.id])
    });

    app.delete(routeName, function (req, res) {
        console.log(req.body);
        if(filmes[req.body.id] == undefined) {
            res.status(401).send("erro")
        }
        delete filmes[req.body.id]
        res.json({msg:"ok"})
    });

}