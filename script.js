const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('button');

let valorAnterior = '';
let operadorAtual = '';
let esperandoNovoValor = false;

for (let botao of botoes) {
    botao.addEventListener('click', function() {
        let textoBotao = botao.textContent;

        if (textoBotao === 'C') {
            visor.textContent = '0';
            valorAnterior = '';
            operadorAtual = '';
            return;
        }

        if (textoBotao === '=') {
            let resultado = 0;
            let atual = Number(visor.textContent);
            let anterior = Number(valorAnterior);

            if (operadorAtual === '+') {
                resultado = anterior + atual;
            } else if (operadorAtual === '-') {
                resultado = anterior - atual;
            } else if (operadorAtual === '*') {
                resultado = anterior * atual;
            } else if (operadorAtual === '/') {
                resultado = anterior / atual;
            }

            visor.textContent = resultado;
            operadorAtual = '';
            esperandoNovoValor = true;
            return;
        }

        if (textoBotao === '+' || textoBotao === '-' || textoBotao === '*' || textoBotao === '/') {
            valorAnterior = visor.textContent;
            operadorAtual = textoBotao;
            esperandoNovoValor = true;
            return;
        }

        if (esperandoNovoValor === true) {
            visor.textContent = textoBotao;
            esperandoNovoValor = false;
        } else {
            if (visor.textContent === '0' && textoBotao !== '.') {
                visor.textContent = textoBotao;
            } else {
                visor.textContent += textoBotao;
            }
        }
    });
}