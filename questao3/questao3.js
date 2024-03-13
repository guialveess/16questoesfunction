function verificarParidade(numero) {
    return numero % 2 === 0;
}

let numero = 5;
let resultado = verificarParidade(numero);
document.body.textContent = resultado ? "O número é par." : "O número é ímpar.";
