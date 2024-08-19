import promptsync = require('prompt-sync');
var prompt = promptsync();

var x :number = Number (prompt("insira um numero :"));

var y :number = Number (prompt("insira um numero  maior que o primeiro :"));

var z :number = Number (prompt("insira o ultimo valor :"));

if  (x<z && y>z){
    console.log(`o valor ${z}, ele esta entre o ${x} e o ${y}`);
}

else {
    console.log(`o valor ${z}, ele não esta entre o ${x} e o ${y}`);
}