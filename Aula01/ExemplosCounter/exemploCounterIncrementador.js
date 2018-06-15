var counter ={
     value:0,
     add:function(){
         return ++this.value
     }
};
console.log(counter.add());
counter.value=undefined;
console.log(counter.add());
console.log(counter.add());

var incrementadorDeItens ={
    value:[],
    add: function(item){
        this.value.push(item);
        return this.value;
    }
};
console.log(incrementadorDeItens.add("A"));
console.log(incrementadorDeItens.add("B"));
console.log(incrementadorDeItens.add("C"));
console.log(counter.add());