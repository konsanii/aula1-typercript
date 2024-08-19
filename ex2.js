"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var a = (prompt("insira um numero maior que 10 :"));
numeros.push(Number(a));
console.log(numeros);
