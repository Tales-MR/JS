var tab     = document.querySelector('select#tabuada');
var con     = document.querySelector('input#con');

con.addEventListener('click', tabu);

function tabu() {
    tab.innerHTML = '';
    let num     = document.querySelector('input#num');
    var num_val = Number(num.value);

    if (num_val != 0 && num_val === '') {
        window.alert('Digite um número!')
    }
    else {
        var num_tab     = 0;

        for (num_tab; num_tab <= 10; num_tab ++) {
            let tab_res = document.createElement('option');
            tab_res.text = `${num_val} x ${num_tab} = ${num_val * num_tab}`;
            tab_res.value = `tab${num_tab}`;

            tab.appendChild(tab_res);
        }
    } 

    /*  TESTANDO A ADIÇÃO DE NOVOS ELEMENTOS E SUA LIGAÇÃO COM DETERMINADOS PAIS
    var teste0 = document.querySelector('main#teste')
    var teste1 = document.createElement('div')
    var teste2 = document.createElement('p')

    teste0.appendChild(teste1)
    teste1.appendChild(teste2)
    teste2.innerText = 'oi';
    */ 
}