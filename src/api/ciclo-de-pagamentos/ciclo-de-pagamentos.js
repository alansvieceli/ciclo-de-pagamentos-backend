const restfull = require("node-restful");
const mongoose = restfull.mongoose

const creditoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    valor: {type: Number, min: 0, required: true}    
});

const debitoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    valor: {type: Number, min: 0, required: [true, "msg de erro personalisada"]},
    situacao: {
        type: String, 
        required: false, 
        uppercase: true, 
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
});

const cicloPagamentoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    mes: {type: Number, min: 1, max: 12, required: true},
    ano: {type: Number, min: 1970, max: 2100, required: [true, "Faltou o ano (sobescreveu a msg do routes.js)"]},
    creditos: [creditoSchema],
    debitos: [debitoSchema]
})

module.exports = restfull.model("ciclo-de-pagamentos", cicloPagamentoSchema)