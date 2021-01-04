'use strict'

const express = require('express');
const app = express();

app.get("/", (req, res) => {
    res.send("Olá Mundo!");
});

app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
});

//Presentation Layer - Entrega de dados para o cliente

//Domain Layer - Regras de Negócio

//Data Layer - Conexação com DB Repositories DAO's