"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var a = Number(prompt("insira sua idade:"));
var b = Number(a - 1);
var c = Number(a - 2);
var d = Number(a + 1);
var e = Number(a + 2);
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
