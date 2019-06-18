const restfull = require("node-restful");
const mongoose = restfull.mongoose

const creditoSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    valor: {type: Number, min: 0, require: true}    
});

const debitoSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    valor: {type: Number, min: 0, require: true},
    situacao: {
        type: String, 
        require: false, 
        uppercase: true, 
        enum: ['PAGO', 'PENDENTE', 'AGENDADO']
    }
});

const cicloPagamentoSchema = new mongoose.Schema({
    nome: {type: String, require: true},
    mes: {type: Number, min: 1, max: 12, require: true},
    ano: {type: Number, min: 1970, max: 2100, require: true},
    credito: [creditoSchema],
    credito: [debitoSchema]
})

module.exports = restfull.model("ciclo-de-pagamentos", cicloPagamentoSchema)