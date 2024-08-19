"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptsync = require("prompt-sync");
var prompt = promptsync();
var x = Number(prompt("insira um numero :"));
var y = Number(prompt("insira um numero  maior que o primeiro :"));
var z = Number(prompt("insira o ultimo valor :"));
if (x < z && y > z) {
    console.log("o valor ".concat(z, ", ele esta entre o ").concat(x, " e o ").concat(y));
}
else {
    console.log("o valor ".concat(z, ", ele n\u00E3o esta entre o ").concat(x, " e o ").concat(y));
}
