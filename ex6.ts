import promptsync = require('prompt-sync');
var prompt = promptsync();

var x: number = Number(prompt("insira um numero por favor "));

if (x%2 == 0) {
    console.log("o numero digitado foi par")
}

else {
    console.log("o numero digitado e impar")
}