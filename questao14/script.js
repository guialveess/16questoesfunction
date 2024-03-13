function calcularDescontoPrevidenciario(salario) {
    const percentualDesconto = 0.11;
    const valorMaximoDesconto = 334.29;

    let desconto = salario * percentualDesconto;
    desconto = Math.min(desconto, valorMaximoDesconto);

    return desconto.toFixed(2);
}

let salario = parseFloat(prompt("Informe o salário do funcionário:"));
let desconto = calcularDescontoPrevidenciario(salario);
console.log("O desconto previdenciário é de R$ " + desconto);
