const CicloPagamento = require('./ciclo-de-pagamentos');

CicloPagamento.methods(['get', 'post', 'put', 'delete']);
CicloPagamento.updateOptions({new: true, runValidators: true});

module.exports = CicloPagamento;