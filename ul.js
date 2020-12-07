const { body } = document;


function onClick() {
  let nameElementNode = document.querySelector('#name');
  name = nameElementNode.value;
  if (name.trim().length === 0) return;
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
  nameElementNode.value = '';
}

function changeName() {
  let newNameElementNode = document.querySelector('#change-name');
  let oldNameElementNode = document.querySelector('#change-old-name');
  let newName = newNameElementNode.value;
  if (newName.trim().length === 0) return;
  const ulElementNode = document.querySelector('ul');
  newNameElementNode.value = '';
  let allChanged = true;
  for (let i = 0; i < ulElementNode.childNodes.length; i++) {
    const liNodeElement = ulElementNode.childNodes[i];
    if (oldNameElementNode.value === liNodeElement.textContent) {
      liNodeElement.textContent = newName;
      liNodeElement.className = 'changed-element';
      allChanged = false;
      oldNameElementNode.value = '';
      return;
    }
  }
  if (allChanged) {
    alert("Nenhum nome para ser alterado!");
  }
}


function deleteName() {
  const ulElementNode = document.querySelector('ul');
  const deleteNameElementNode = document.querySelector('#delete-name');
  const deleteName = deleteNameElementNode.value;
  if (deleteName.trim().length === 0) return;
  const ulElementChildNodes = ulElementNode.childNodes;
  let findElement = false;
  for (let i = 0; i < ulElementChildNodes.length; i++) {
    if (ulElementChildNodes[i].textContent.toUpperCase() === deleteName.toUpperCase()) {
      ulElementNode.removeChild(ulElementChildNodes[i]);
      findElement = true;
    }
  }
  if (!findElement) {
    alert('Nome não encontrado!')
  }
}

