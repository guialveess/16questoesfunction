document.addEventListener("DOMContentLoaded", function() {
    let capitalInicial = parseFloat(prompt("Informe o capital inicial investido:"));
    let taxaJuros = parseFloat(prompt("Informe a taxa de juros mensal (%):"));
    let tempoMeses = parseInt(prompt("Informe o tempo do investimento em meses:"));

    function calcularMontante(capitalInicial, taxaJuros, tempoMeses) {
        let taxaJurosDecimal = taxaJuros / 100; // Convertendo a taxa de juros para decimal
        let montante = capitalInicial * Math.pow((1 + taxaJurosDecimal), tempoMeses);
        return montante.toFixed(2); // Arredondando para 2 casas decimais
    }

    let montante = calcularMontante(capitalInicial, taxaJuros, tempoMeses);
    document.body.textContent = "O montante do investimento é: R$ " + montante;
});
