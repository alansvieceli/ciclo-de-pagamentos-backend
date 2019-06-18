const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

module.exports = mongoose.connect("mongodb://localhost/ciclo-de-pagamentos-app", { useNewUrlParser: true })