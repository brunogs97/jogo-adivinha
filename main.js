// criar referência com os elementos
const btJogar = document.querySelector('#btJogar');
const respErros = document.querySelector('#outErros');
const respChances = document.querySelector('#outChances');
const respDicas = document.querySelector('#outDica');

const erros = [];  // vetor de escopo global com números já apostados
const sorteado = Math.floor(Math.random() * 100) + 1;  // número aleatório entre 1 e 100
console.log(sorteado)
const CHANCES =  6; // constante com o numero máximo de chances

// criar um evento de escuta para o submit
btJogar.addEventListener('click', () => {
    
    const numero = Number(inNumero.value);  // obtém o valor digitado
    
    if(numero == sorteado) {  // se acertou
        respDicas.innerText = `Parabéns!! Número sorteado ${sorteado}`;
        btJogar.disabled = true; // troca status dos botões
        btNovo.disabled = false;
    }else {
        if(erros.includes(numero)) {  // verificar se o número bai repetir
            alert(`Você já apostou o número ${numero}. Tente outro...`);
        } else {
            erros.push(numero);  //adiciona o número na lista
            const numErros = erros.length;  // verifica o tamanho do vetor
            const numChances = CHANCES - numErros;  // calcula o número de chances
            // exibe n° de erros, conteúdo do vetor e n° de chances
            respErros.innerText = `${numErros} (${erros.join(', ')})`;
            respChances.innerText = numChances

            if(numChances == 0) {
                alert('Suas chances acabaram...');
                btJogar.disabled = true;
                btNovo.disabled = false;
                respDicas.innerText = `Game Over!! Número Sorteado: ${sorteado}`
            } else {
                // usa operador ternário para mensagem da dica
                const dica = numero < sorteado ? 'maior' : 'menor';
                respDicas.innerText = `Dica: Tente um número ${dica} que ${numero}`
            }
        }
    }
    inNumero.value = ''; // limpa o campo de entrada
    inNumero.focus(); // posiciona o cursor neste campo
})

btNovo.addEventListener('click', () => {
    location.reload();  // recarrega a página
})