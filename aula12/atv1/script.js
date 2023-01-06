var cxhora = document.querySelector('span#hora');

var corpo  = document.querySelector('body')
var indic1  = document.getElementsByClassName('indic')[0];
var indic2  = document.getElementsByClassName('indic')[1];

var imagem  = document.querySelector('div#img')


var athora = new Date;

var hora = athora.getHours();

cxhora.innerHTML = hora;

if (hora == 1) {
    indic1.innerHTML = 'é'
    indic2.innerHTML = 'hora'
}

if (hora < 6 || hora > 17) {
    corpo.style.background = 'var(--cor3)';
    imagem.style.background = 'var(--img2)';
}
else if (hora < 14) {
    corpo.style.background = 'var(--cor1)';
    imagem.style.background = 'var(--img1)';
}
else if (hora < 18) {
    corpo.style.background = 'var(--cor2)';
    imagem.style.background = 'var(--img3)';
}
