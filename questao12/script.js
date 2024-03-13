function calcularGorjetaEValorTotal(valorRefeicao) {
    const taxaGorjeta = 0.10;

    let gorjeta = valorRefeicao * taxaGorjeta;
    let valorTotal = valorRefeicao + gorjeta;

    console.log("Valor da gorjeta: R$ " + gorjeta.toFixed(2));
    console.log("Valor total (com gorjeta): R$ " + valorTotal.toFixed(2));
}

let valorRefeicao = parseFloat(prompt("Informe o valor gasto com a refeição:"));
calcularGorjetaEValorTotal(valorRefeicao);
