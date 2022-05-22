const personagens = document.querySelectorAll('.personagem');


personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        const idSelecionado = personagem.getAttribute('id');
        
        if(idSelecionado === 'ultron'){
            return;
        }
        
        const personagemSelecionado = document.querySelector(".selecionado")
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');
        
        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`

        var nomeJogador1 = document.getElementById('nome-jogador-1');
        nomeJogador1.textContent = personagem.getAttribute('data-name');
    });
});

