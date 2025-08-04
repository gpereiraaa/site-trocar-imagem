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
    const randomIndex = Math.floor(Math.random() * cidades.length)
    document.documentElement.style.setProperty('--bg-image', cidades[randomIndex])
}

botaoTrocarImagem.addEventListener('click', trocarImagem)
botaoAuto.addEventListener('click', gerarImagemAuto)