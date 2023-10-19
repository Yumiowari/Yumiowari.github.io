const link = document.querySelector('.credito');
let intervalo;
const textoOriginal = 'Yumiowari';
let indice = 0;

link.addEventListener('mouseover', iniciaAnimacao);
link.addEventListener('mouseout', terminaAnimacao);

function iniciaAnimacao(){
    intervalo = setInterval(animarTexto, 200)
};

function animarTexto(){
    if(indice === textoOriginal.length)indice = 0;

    const novoTexto = textoOriginal.substring(indice) + textoOriginal.substring(0, indice);

    link.innerText = novoTexto;

    indice++;
};

function terminaAnimacao(){
    clearInterval(intervalo);

    link.innerText = textoOriginal;
};

