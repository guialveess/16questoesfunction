const consumo = 20;
const precoLitro = 5.00;

let dinheiro = parseFloat(prompt("Quanto dinheiro você tem?"));
let litros = dinheiro / precoLitro;
let quilometros = litros * consumo;

console.log("Você pode comprar " + litros.toFixed(2) + " litros de combustível.");
console.log("Com esse tanto de combustível, o carro pode andar " + quilometros.toFixed(2) + " km.");
