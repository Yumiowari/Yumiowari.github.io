const link = document.querySelector('.credito');
let intervalo;
const textoOriginal = link.innerText;
let indice = textoOriginal.length;

link.addEventListener('mouseover', iniciaAnimacao);
link.addEventListener('mouseout', terminaAnimacao);

function iniciaAnimacao(){
    intervalo = setInterval(animarTexto, 200)
};

function animarTexto(){
    if(indice === 0)indice = textoOriginal.length;

    const novoTexto = textoOriginal.substring(indice, textoOriginal.length) + textoOriginal.substring(0, indice);

    link.innerText = novoTexto;

    indice--;
};

function terminaAnimacao(){
    clearInterval(intervalo);

    link.innerText = textoOriginal;
};

