
function executarQuiz() {
    let pontuacao = 0;

    
    let perguntas = [
        "Qual é a capital do Brasil?",
        "Quem escreveu 'Dom Casmurro'?",
        "Quantos planetas existem no sistema solar?"
    ];

    let respostas = [
        "brasília",
        "machado de assis",
        "oito"
    ];


    for (let i = 0; i < perguntas.length; i++) {
        let respostaUsuario = prompt(perguntas[i]);

    
        switch (respostaUsuario.toLowerCase()) {
            case respostas[i]:
                pontuacao++;
                alert("Resposta correta!");
                break;
            default:
                alert("Resposta incorreta. A resposta correta era: " + respostas[i]);
                break;
        }
    }


    alert("Quiz finalizado! Sua pontuação foi: " + pontuacao + " de " + perguntas.length);
}


executarQuiz();
