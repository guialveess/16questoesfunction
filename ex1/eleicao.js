let votosJose = 0;
let votosJoao = 0;

while (true) {
    let tituloEleitor = Number(prompt("Digite o número do seu título de eleitor (ou um número negativo para encerrar a votação): "));
    
    if (tituloEleitor < 0) {
        break;
    }

    let voto = Number(prompt("Digite o número do seu voto (1 para José, 2 para João): "));
    
    switch (voto) {
        case 1:
            votosJose++;
            break;
        case 2:
            votosJoao++;
            break;
        default:
            console.log("Voto inválido.");
            break;
    }
}

console.log(`Total de votos para José: ${votosJose}`);
console.log(`Total de votos para João: ${votosJoao}`);

if (votosJose > votosJoao) {
    console.log("José, do Partido da Felicidade, ganhou a eleição!");
} else if (votosJoao > votosJose) {
    console.log("João, do Partido da Esperança, ganhou a eleição!");
} else {
    console.log("A eleição terminou em empate.");
}
