module.exports = function(){
    var anoLimite = (new Date()).getFullYear()-20;
    if(this.anoFabricacao<anoLimite){
        return 0;
    }
    else{
        if(this.utilitario){
            return this.preco * 0.01;
        }
        else{
            return this.preco * 0.02;
        }
    }
}