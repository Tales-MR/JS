//Checando quantos anos possui e se a idade é válida
var dataCliente = Number(document.querySelector('input#ano'));
var dataAtual   = new Date();
var dataAtual   = dataAtual.getFullYear();

//Checando o gênero
var checkh      = document.querySelector('input#masc');
var checkm      = document.querySelector('input#fem');

//Variavel da caixa onde será exibida a foto
var cxfoto      = document.querySelector('div#img')


//Botão de verificar
var verificar   = document.querySelector('input#ver');

verificar.addEventListener('click', checar)

//Função de checar 
function checar() {
    dataCliente = document.querySelector('input#ano');
    dataCliente = dataCliente.value;

    textIdade   = document.querySelector('p#indic')

    //rodar somente se ano for menor que ano atual, o ano for diferente de nada e o ano for maior que a data atual menos 110
    if (checkh.checked == false && checkm.checked == false) {
        window.alert('Selecione seu sexo!')
    }
    else if (dataCliente < dataAtual && dataCliente != '' && dataCliente > (dataAtual - 110)){
        cxfoto.style.display = "block";

        var idade = dataAtual - dataCliente;
        var sex = '';

        if (checkh.checked == true) {
            if (idade <= 14) {
                cxfoto.style.background = 'var(--img8)';

                sex = 'uma criança';
            }
            else if (idade <= 19) {
                cxfoto.style.background = 'var(--img6)';

                sex = 'um jovem';
            }
            else if (idade <= 45) {
                cxfoto.style.background = 'var(--img4)';

                sex = 'um adulto';
            }
            else
            {
                cxfoto.style.background = 'var(--img2)';

                sex = 'um idoso';
            }
        }

        if (checkm.checked == true) {
            if (idade <= 14) {
                cxfoto.style.background = 'var(--img7)';

                sex = 'uma criança';
            }
            else if (idade <= 19) {
                cxfoto.style.background = 'var(--img5)';

                sex = 'uma jovem';
            }
            else if (idade <= 45) {
                cxfoto.style.background = 'var(--img3)';

                sex = 'uma adulta';
            }
            else
            {
                cxfoto.style.background = 'var(--img1)';

                sex = 'uma idosa';
            }
        }

        var x = createElement()
        textIdade.style.textAlign = 'center';
        textIdade.innerHTML = `Detectamos ${sex} com ${idade} anos.`
    }
    else {
        window.alert('Digite valores válidos!')
    }
}
