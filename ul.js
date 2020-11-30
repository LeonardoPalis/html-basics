const { body } = document;

onClick('Leonardo Palis 1');
onClick('Leonardo Palis 2');
onClick('Leonardo Palis 3');
onClick('Leonardo Palis 4');
onClick('Leonardo Palis 5');

changeName('João Barbosa');
changeName('João Barbosa 2');

function onClick(name) {
  let ulElementNode = document.querySelector('ul');
  if (!ulElementNode) {
    ulElementNode = document.createElement('ul');
  }
  const numberOfChildrens = ulElementNode.childNodes.length + 1;
  const liElementNode = document.createElement('li');
  liElementNode.id = 'name' + numberOfChildrens;
  const textElementNode = document.createTextNode(name);
  liElementNode.appendChild(textElementNode);
  ulElementNode.appendChild(liElementNode);
  body.appendChild(ulElementNode);
}

function changeName(newName) {
  const ulElementNode = document.querySelector('ul');

  for (let i = 0; i < ulElementNode.childNodes.length; i++) {
    const liNodeElement = ulElementNode.childNodes[i];
    if (!liNodeElement.className) {
      liNodeElement.textContent = newName;
      liNodeElement.className = 'changed-element';
      return;
    }
  }
  
}