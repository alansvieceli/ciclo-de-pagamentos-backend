//criar middleware
    
module.exports = function(request, response, next) {
    response.header('Access-Control-Allow-Origin', '*'); //poderia listar os ips
    response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
}