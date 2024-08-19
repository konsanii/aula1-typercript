//funçoes sem parametro e sem retorno
function imprime() {
    console.log("sem parametro e sem retorno");
}
//chamada da função
imprime();
//funcao com parametro e sem retorno
function soma(num1, num2) {
    console.log("soma: ".concat(num1 + num2));
}
//chamada da funçao
soma(1, 2);
//função com parametro e com retorno
function subtrai(num1, num2) {
    return num1 - num2;
}
//chamada da função
var resultado = subtrai(10, 9);
console.log(resultado);
