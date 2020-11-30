const { body } = document;

const spans = [];

for (let i = 0; i < 100; i++) {
  const span = createSpanRed('Ola mundo! ' + i);
  spans.push(span);
}

spans.forEach(span => {
  const wrapperSpan = wrapSpan(span);
  body.appendChild(wrapperSpan)
});

function wrapSpan(spanNodeElement) {
  const divNode = document.createElement('div');
  divNode.appendChild(spanNodeElement);
  return divNode;
}

function createSpanRed(text) {
  const spanElement = document.createElement('span');
  createTextContent(spanElement, text)
  spanElement.style.color = 'red';
  return spanElement;
}

function createTextContent(nodeElement, text) {
  const textElement = document.createTextNode(text);
  nodeElement.appendChild(textElement);
}
