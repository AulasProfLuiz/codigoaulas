var criarCarros = require("./construtorCarros");
var formulaIPVA = require("./formulaIPVA")
var carro1 = criarCarros("Fiat", "Palio", 18000, 2014, true, formulaIPVA);
console.log(carro1);
console.log(carro1.calcularIPVA());