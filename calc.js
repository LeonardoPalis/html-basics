
// const firstValue = document.getElement 

let firstValue = 0;
let secondValue = 0;
let results = [];
const resultLabel = "Resultado: ";


function changeFirstInput() {
  firstValue = event.target.value;
};

function changeSecondInput() {
  secondValue = event.target.value;
};

function somar(){
  const soma = parseInt(firstValue) + parseInt(secondValue);
  results.push(soma);
  const resultNode = document.getElementById('result');
  resultNode.textContent = resultLabel + soma;
  showHistory(soma);

}

function subtrair(){
  const subtracao = parseInt(firstValue) - parseInt(secondValue);
  results.push(subtracao);
  const resultNode = document.getElementById('result');
  resultNode.textContent = resultLabel + subtracao;
  showHistory(subtracao);

}

function multiplicar(){
  const multiplicacao = parseInt(firstValue) * parseInt(secondValue);
  results.push(multiplicacao);
  const resultNode = document.getElementById('result');
  resultNode.textContent = resultLabel + multiplicacao;
  showHistory(multiplicacao);

}

function dividir(){
  const divisao = parseInt(firstValue) / parseInt(secondValue);
  results.push(divisao);
  const resultNode = document.getElementById('result');
  resultNode.textContent = resultLabel + divisao;
  showHistory(divisao);
}

function showHistory(newValue) {
  let ulNode = document.getElementById('history-list') ;
  if (!ulNode) {
    ulNode = document.createElement('ul');
    ulNode.id = "history-list";
  }

  const liNode = document.createElement('li');
  liNode.textContent = newValue;
  liNode.id = "li" + newValue;
  ulNode.appendChild(liNode);
  const historyNode = document.getElementById('history');
  const currentUlNode = document.getElementById('history-list');
  console.log('current', currentUlNode)
  historyNode.appendChild(ulNode);

}

