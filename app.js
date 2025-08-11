'use strict'

const botaoTrocarImagem = document.getElementById('trocar-imagem')
const botaoAuto = document.getElementById('auto')

function trocarImagem () {
    const cidade= document.getElementById('cidade').value
    document.documentElement.style.setProperty('--bg-image', `url(./img/${cidade}.png)`)
}


function gerarImagemAuto() {
    const cidades = [
        'url(./img/barueri.png)',
        'url(./img/carapicuiba.png)',
        'url(./img/cotia.png)',
        'url(./img/itapevi.png)',
        'url(./img/jandira.png)',
        'url(./img/osasco.png)'
    ]

    let posicao = 0

    function slide() {
        document.documentElement.style.setProperty('--bg-image', cidades[posicao])
        posicao = (posicao + 1) % cidades.length
    }

    slide()
    setInterval(slide, 3000)
}


botaoTrocarImagem.addEventListener('click', trocarImagem)
botaoAuto.addEventListener('click', gerarImagemAuto)
