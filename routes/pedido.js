const express = require("express");
const router = express.Router();

let pedidos = [];

router.get("/", (req, res) => {
    res.json(pedidos);
});

router.post("/", (req, res) => {
    const { nome, produto } = req.body;
    const novoPedido = { id: pedidos.length + 1, nome, produto };
    pedidos.push(novoPedido);
    res.status(201).json(novoPedido);
});

module.exports = router;
