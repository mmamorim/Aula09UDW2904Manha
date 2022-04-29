
const routeName = "/clientes"

const clientes = [
    {
        id: "cli01",
        nome: "Coca-cola",
        fone: "011 34343434",
        email: "coca@coca.com"
    },
    {
        id: "cli02",
        nome: "Fanta Uva",
        fone: "011 34343434",
        email: "fanta@fanta.com"
    },
]

export default function (app) {

    app.get(routeName, function (req, res) {
        res.status(200).json(clientes)
    });

    app.post(routeName, function (req, res) {
        res.json({ algo: "alguma coisa", msg: "uma menssagem" })
    });

    app.put(routeName, function (req, res) {
        res.json({ algo: "alguma coisa", msg: "uma menssagem" })
    });

    app.delete(routeName, function (req, res) {
        res.json({ algo: "alguma coisa", msg: "uma menssagem" })
    });

}
