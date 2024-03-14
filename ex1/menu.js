function soma(a, b) {
    return a + b;
}

function diferenca(a, b) {
    return Math.abs(a - b);
}

function produto(a, b) {
    return a * b;
}

function divisao(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Não é possível dividir por zero.";
    }
}

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

console.log("Escolha a opção:");
console.log("A - Soma de 2 números.");
console.log("B - Diferença entre 2 números (maior pelo menor).");
console.log("C - Produto entre 2 números.");
console.log("D - Divisão entre 2 números (o denominador não pode ser zero).");

let opcao = prompt("Opção escolhida: ");

switch (opcao.toUpperCase()) {
    case 'A':
        console.log(`A soma dos números é ${soma(numero1, numero2)}`);
        break;
    case 'B':
        console.log(`A diferença entre os números é ${diferenca(numero1, numero2)}`);
        break;
    case 'C':
        console.log(`O produto dos números é ${produto(numero1, numero2)}`);
        break;
    case 'D':
        console.log(`A divisão dos números é ${divisao(numero1, numero2)}`);
        break;
    default:
        console.log("Opção inválida.");
        break;
}
