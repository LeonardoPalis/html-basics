let acc = 0;
let currentOperator = null
let currentValue = "";
let values = [];
let operators = [];

function onClickNumber() {
  const value = event.target.textContent;
  currentValue += value;
}

function soma() {
  values.push(parseInt(currentValue));
  currentValue = "";
  operators.push('+');
  
}

function sub() {
  values.push(parseInt(currentValue));
  currentValue = "";
  operators.push('-');
}

function mult() {
  values.push(parseInt(currentValue));
  currentValue = "";
  operators.push('*');
}

function div() {
  values.push(parseInt(currentValue));
  currentValue = "";
  operators.push('/');
}

function calc() {
  switch(currentOperator) {
    case '+': {
      acc += parseInt(currentValue);
    }

    case '-': {
      acc -= parseInt(currentValue);
    }
    
  }
}


function onResult() {
  values.push(parseInt(currentValue));
  currentValue = "";

  let result = 0;
  for (let i = 0; i < operators.length; i++) {
    if (i === 0) {
      result = calcByType(operators[i], values[i], values[i + 1])
    } else {
      result = calcByType(operators[i], result, values[i + 1])
    }
  }
  console.log("values", values)
  console.log("op", operators)
  console.log("RESULT", result)
}

function calcByType(type, val1, val2) {
  switch(type) {
    case '+': {
      return val1 + val2;
    }
    case '-': {
      return val1 - val2;
    }
    case '*': {
      return val1 * val2;
    }
    case '/': {
      return val1 / val2;
    }
  }
}