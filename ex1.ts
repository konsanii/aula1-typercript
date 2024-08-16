import promptsync = require('prompt-sync');

var prompt = promptsync();

const a: number = Number(prompt("insira sua idade"));

let b: number = Number(a-1)

let c: number = Number(a-2)

let d: number = Number(a+1)

let e: number = Number(a+2)

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)