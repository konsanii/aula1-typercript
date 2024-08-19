"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
//numeros
var x = Number(prompt("insira um numero :"));
var y = Number(prompt("insira um numero :"));
//soma
soma(x, y);
function soma(x, y) {
    console.log("soma: ".concat(x + y));
}
//subtração
subtração(x, y);
function subtração(x, y) {
    console.log("subtra\u00E7\u00E3o: ".concat(x - y));
}
//divisão
divisão(x, y);
function divisão(x, y) {
    console.log("divis\u00E3o: ".concat(x / y));
}
//
multiplicação(x, y);
function multiplicação(x, y) {
    console.log("multiplica\u00E7\u00E3o: ".concat(x * y));
}
