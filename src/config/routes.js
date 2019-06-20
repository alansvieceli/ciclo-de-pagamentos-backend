const express = require("express");

module.exports = function(server){
    //API Rounters
    const router = express.Router();
    server.use("/api", router);

    //Tarefa Ruotes
    const tarefaService = require("../api/ciclo-de-pagamentos/ciclo-de-pagamentos-service");
    tarefaService.register(router, "/ciclo-de-pagamentos")
}