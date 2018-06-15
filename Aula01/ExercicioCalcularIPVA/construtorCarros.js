module.exports = function(marca, modelo, preco, anoFabricacao, utilitario, formulaIPVA){
    return {
        marca: marca,
        modelo:modelo,
        preco:preco,
        anoFabricacao:anoFabricacao,
        utilitario:utilitario,
        calcularIPVA:formulaIPVA
    }
}