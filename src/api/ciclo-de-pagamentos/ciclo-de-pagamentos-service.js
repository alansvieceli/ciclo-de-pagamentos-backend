const CicloPagamento = require('./ciclo-de-pagamentos');

CicloPagamento.methods(['get', 'post', 'put', 'delete']);
CicloPagamento.updateOptions({new: true, runValidators: true});

CicloPagamento.route('count', (req, res, next) => {
    CicloPagamento.count((error, value) => {
        if (error){
            res.status(500).json({errors: [error]});
        } else {
            res.json({value})
        }
    });
});


module.exports = CicloPagamento;