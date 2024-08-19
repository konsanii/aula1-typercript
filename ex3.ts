import promptsync = require('prompt-sync');
var prompt = promptsync();

//numeros
var x :number = Number (prompt("insira um numero :"));
var y :number = Number (prompt("insira um numero :"));

//soma
soma (x,y)
function soma(x:number, y:number) {
    console.log(`soma: ${x + y}`)
}

//subtração
subtração (x,y)
function subtração(x:number, y:number) {
    console.log(`subtração: ${x - y}`)
}

//divisão
divisão (x,y)
function divisão(x:number, y:number) {
    console.log(`divisão: ${x / y}`)
}

//
multiplicação (x,y)
function multiplicação(x:number, y:number) {
    console.log(`multiplicação: ${x * y}`)
}
