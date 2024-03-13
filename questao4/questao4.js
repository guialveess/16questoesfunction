let numero1 = parseInt(prompt("Informe o primeiro número:"));
let numero2 = parseInt(prompt("Informe o segundo número:"));
let numero3 = parseInt(prompt("Informe o terceiro número:"));


let maiorNumero = Math.max(numero1, numero2, numero3);


document.body.textContent = "O valor maior é: " + maiorNumero;
