const port = 3003

//Parser do corpo da requisição, Formulario, JSON, XML
const bodyParser = require("body-parser");
//Servidor web que roda em cima do node
const express = require("express");
const server = express();

server.use(bodyParser.urlencoded({extended: true})); //formulario
server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`BACKEND está rodando na porta ${port}, quiridu!!`)
});

module.exports = server;