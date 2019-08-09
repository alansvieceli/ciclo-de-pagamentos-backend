const port = process.env.PORT || 3003;

const allowCors = require("./cors");
const queryParser = require("express-query-int");

//Parser do corpo da requisição, Formulario, JSON, XML
const bodyParser = require("body-parser");
//Servidor web que roda em cima do node
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({extended: true})); //formulario
server.use(bodyParser.json());
server.use(allowCors);

//http://localhost:3003/api/ciclo-de-pagamentos/skip=0&limit=1
server.use(queryParser())

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}, quiridu!!`)
});

module.exports = server;