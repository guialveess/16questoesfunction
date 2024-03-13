let salario = parseFloat(prompt("Informe o valor do seu salário:"));
let prestacao = parseFloat(prompt("Informe o valor da sua prestação:"));

function calcEmprestimo(salario, prestacao) {
    const limitePrestacao = salario * 0.20;

    if (prestacao <= limitePrestacao) {
        console.log("Empréstimo pode ser concedido.");
    } else {
        console.log("Empréstimo não pode ser concedido.");
    }
}

calcEmprestimo(salario, prestacao);
