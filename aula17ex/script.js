//Variávei de armazenamento de dados devem ser declaradas dentro de funções, para evitar erro de sequência de códigos
//Criando a div de exibição detalhada
var div     = document.createElement('div');

//Chamando a div mae
var div_mae = document.querySelector('div#res');

div_mae.appendChild(div)


//Variável de confirmação e adição
let conf    = document.querySelector('input#con');
let add     = document.querySelector('input#add');

add.addEventListener('click', adicionar);


//Função de adição de números a nossa array
var list    = [];

function adicionar(){
    //chamando a variável que ira armazenar o número do input
    let num     = document.querySelector('input#num');
    let num_val = Number(num.value)

    //Variável onde será mostrada a nova adição, caso ela ocorra
    let result  = document.querySelector('select#addvalue');

    if (list.indexOf(num_val) == -1 && num_val < 101 && num_val > 0) {
        //Adicionar ao vetor
        list.push(num_val);

        //Criar um option para exibir 
        let exi         = document.createElement('option');
        result.appendChild(exi);
        exi.innerText   = `O valor ${num_val} foi adicionado!` ;
        exi.value       = `item${num_val}`;

        num.focus();
        num.value = '';

        div.innerHTML   = '';
    } else {
        window.alert('O valor digitado é inválido ou já está na lista')
        num.focus();
        num.value = '';
    }

    //Colocando os números em ordem
    list.sort();
}

//Função de exibição detalhada
//Variável de chamada
conf.addEventListener('click', finalizar)

//função
function finalizar() {
    //pegando os valores do array se houver valor
    if (list.length != 0) {
        //Quantidade
        let qua = list.length;

        //maior e menor
        let ma  = list[qua-1]
        let me  = list[0]

        //média
        let soma    = 0;

        for (cont = 0; cont < qua; cont ++) {
            soma += list[cont];
        }

        let medi    = soma / qua;

        //Mostrando o maior, menor, quantidade, soma, media
        let dados   = [`O maior valor informado foi ${ma}`, `O menor valor informado foi ${me}`, `Ao todo, temos ${qua} números cadastrados`, `Somando todos os valores, temos ${soma}`, `A média dos valores digitados é ${medi}`]

        for (cont = 0; cont < dados.length; cont++) {
            //criar um elemento e alinhar o pai, juntamente com o conteúdo
            let dado    = document.createElement('p');
            div.appendChild(dado);
            dado.innerHTML = dados[cont];
            dado.style.margin = '4px';
        }
    } else {
        window.alert('Registe valores')
    }


}