
// script.js

// Função que controla as escolhas do jogador
function choose(option) {
    let description = document.getElementById('description');
    let choices = document.querySelector('.choices');
    
    if (option === 'investigar') {
        description.innerHTML = `
            <p>Você decide investigar o hospital. Caminhando pelos corredores, você encontra um robô destruído. Ele parece ter informações importantes.</p>
        `;
        choices.innerHTML = `
            <button onclick="choose('hackear')">Hackear o robô</button>
            <button onclick="choose('seguir')">Ignorar e continuar explorando</button>
        `;
    } else if (option === 'fugir') {
        description.innerHTML = `
            <p>Você decide fugir imediatamente. Correndo pelos corredores, você encontra uma saída, mas há robôs patrulhando. Como você deseja proceder?</p>
        `;
        choices.innerHTML = `
            <button onclick="choose('esconder')">Se esconder e esperar uma oportunidade</button>
            <button onclick="choose('correr')">Correr pelos robôs</button>
        `;
    } else if (option === 'hackear') {
        description.innerHTML = `
            <p>Você hackeia o robô e descobre uma mensagem crucial: "A resistência está localizada no subsolo da antiga fábrica". Agora, você sabe para onde ir.</p>
        `;
        choices.innerHTML = `
            <button onclick="choose('fugir')">Fugir do hospital e ir para a fábrica</button>
        `;
    } else if (option === 'seguir') {
        description.innerHTML = `
            <p>Você decide não mexer no robô e continuar explorando. De repente, você escuta passos de metal se aproximando. Você precisa tomar uma decisão rápida.</p>
        `;
        choices.innerHTML = `
            <button onclick="choose('esconder')">Se esconder em um quarto</button>
            <button onclick="choose('enfrentar')">Enfrentar o robô</button>
        `;
    } else if (option === 'esconder') {
        description.innerHTML = `
            <p>Você se esconde e observa os robôs patrulhando. Depois de alguns minutos, eles vão embora e você encontra um caminho seguro para sair do hospital.</p>
        `;
        choices.innerHTML = `
            <button onclick="choose('fugir')">Fugir do hospital</button>
        `;
    } else if (option === 'correr') {
        description.innerHTML = `
            <p>Você corre pelos robôs, mas eles te detectam e disparam lasers. Você é atingido e não consegue continuar. Fim de jogo.</p>
        `;
        choices.innerHTML = `
            <button onclick="restart()">Recomeçar</button>
        `;
    } else if (option === 'enfrentar') {
        description.innerHTML = `
            <p>Você tenta enfrentar o robô, mas ele é muito poderoso. Ele te derruba rapidamente. Fim de jogo.</p>
        `;
        choices.innerHTML = `
            <button onclick="restart()">Recomeçar</button>
        `;
    }
}

// Função para recomeçar o jogo
function restart() {
    location.reload();
}
