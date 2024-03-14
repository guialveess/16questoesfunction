let numero = Number(prompt("Digite um número para ver a tabuada: "));

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
