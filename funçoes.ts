//funçoes sem parametro e sem retorno
function imprime(){
    console.log("sem parametro e sem retorno")
}

//chamada da função
imprime()

//funcao com parametro e sem retorno
function soma (num1:number,num2:number){
    console.log(`soma: ${num1+num2}`)
}

//chamada da funçao
soma(1,2)

//função com parametro e com retorno
function subtrai (num1:number, num2:number) : number{
    return num1 - num2
}

//chamada da função
const resultado = subtrai(10,9)
console.log(resultado)

