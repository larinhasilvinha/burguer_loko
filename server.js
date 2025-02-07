const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// Servir arquivos estáticos da pasta views
app.use(express.static(path.join(__dirname, "views")));

// Importar rotas
const clienteRoutes = require("./routes/cliente");
const pedidoRoutes = require("./routes/pedido");
const produtoRoutes = require("./routes/produto");

app.use("/clientes", clienteRoutes);
app.use("/pedidos", pedidoRoutes);
app.use("/produtos", produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
