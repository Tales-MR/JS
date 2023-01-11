//Pegar o número de inicio e, enquanto não chegar ao número de fim, contar!
var check = document.querySelector('input#con')
check.addEventListener('click', contar)

var titulo = document.querySelector('p#tit')

function contar() {

//variáveis 
var ini = document.querySelector('input#ini');
var fim = document.querySelector('input#fim');
var pas = document.querySelector('input#pas');
var txr = document.querySelector('p#res')

var val_ini = Number(ini.value);
var val_pas = Number(pas.value);

var txt =  val_ini;

if (fim.value === '') {
    titulo.innerHTML = 'Não é possível contar!';
} 
else {
    if (ini.value == '') {
        val_ini = 0;
    }
    if (val_pas === '' || val_pas == '0') {
        val_pas = 1;
    }
    
    //while
    if (fim.value < val_ini) {
        for (val_ini; val_ini > fim.value && val_ini + val_pas >= fim.value;txt +=  '\u{1F449}' + val_ini) {
            val_ini -= val_pas;
        }
    }
    else if (fim.value > val_ini) {
        for (val_ini; val_ini < fim.value && val_ini + val_pas <= fim.value;txt +=  '\u{1F449}' + val_ini){
            val_ini += val_pas;
        }
    }

    titulo.innerHTML = 'Contando...'

    txr.innerText = txt + '\u{1F3C1}';
}
}
