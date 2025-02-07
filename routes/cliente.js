const express = require('express');
const Cliente = require('../models/cliente');
const bcrypt = require('bcrypt');
const router = express.Router();

// Rota de cadastro de cliente
router.post('/', async (req, res) => {
    try {
        const { nome, email, telefone, senha } = req.body;
        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const cliente = await Cliente.create({ nome, email, telefone, senha: senhaCriptografada });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao cadastrar cliente', details: error.message });
    }
});

module.exports = router;
