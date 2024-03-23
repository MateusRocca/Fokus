const html = document.querySelector('html');

const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');
const btStartPause = document.querySelector('#start-pause');
const iniciarOuPausarTexto = document.querySelector('#start-pause span');
const iniciarOuPausarIcone = document.querySelector('.app__card-primary-butto-icon');

const banner = document.querySelector('.app__image');
const textoTitulo = document.querySelector('.app__title');

const musicaFocoInput = document.querySelector('#alternar-musica');
const audio = new Audio('./sons/luna-rise-part-one.mp3');
audio.loop = true;

const audioPlay = new Audio('./sons/play.wav');
const audioPause = new Audio('./sons/pause.mp3');

let tempoDecorridoEmSegundos = 5;
let intervaloId = null;


musicaFocoInput.addEventListener('change', () => {
    if(audio.played){
         audio.pause();
    } else {
        audio.play();
    }
});

btFoco.addEventListener('click', () => {
    alterarContexto('foco');
    btFoco.classList.add('active');
    
})

btCurto.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    btCurto.classList.add('active');
    
})

btLongo.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    btLongo.classList.add('active');
    
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', `${contexto}`);
    banner.src = `./imagens/${contexto}.png`;
    botoes.forEach(function(botao) {
        botao.classList.remove('active');
    })

    switch (contexto) {
        case 'foco':
            textoTitulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `;
            break;
        case 'descanso-curto':
            textoTitulo.innerHTML = `
            Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `;
            break;
        case 'descanso-longo':
            textoTitulo.innerHTML = `
            Hora de voltar à superficie.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
            `;
            break;
        default:
            break;
    }

    
  
}  

const contagemRegressiva = () => {
    if(tempoDecorridoEmSegundos <= 0){
        alert('Tempo finalizado!');
        zerar();
        return;
    }
    tempoDecorridoEmSegundos -= 1;
    console.log(tempoDecorridoEmSegundos);
}

btStartPause.addEventListener('click', iniciarOuPausar);

function iniciarOuPausar() {
    if(intervaloId){
        audioPause.play();
        zerar();
        return;
    } 
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000);
    iniciarOuPausarTexto.textContent = 'Pausar';
    iniciarOuPausarIcone.setAttribute('src', './imagens/pause.png');
}

function zerar() {
    clearInterval(intervaloId);
    iniciarOuPausarTexto.textContent = 'Começar';
    iniciarOuPausarIcone.setAttribute('src', './imagens/play_arrow.png');
    intervaloId = null;
}