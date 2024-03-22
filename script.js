const html = document.querySelector('html');
const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const textoTitulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');


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

