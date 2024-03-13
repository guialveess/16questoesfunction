function calcularRendimentoPoupanca(valorDepositado) {
    const juroMensal = 0.007;

    let valorRendimento = valorDepositado + (valorDepositado * juroMensal);

    return valorRendimento.toFixed(2);
}

let valorDepositado = parseFloat(prompt("Informe o valor depositado:"));
let valorComRendimento = calcularRendimentoPoupanca(valorDepositado);
console.log("O valor com rendimento após um mês é: R$ " + valorComRendimento);
