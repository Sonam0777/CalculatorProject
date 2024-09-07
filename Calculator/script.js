let expression = '';

function handleInput(value) {
  expression += value;
  document.getElementById('result').innerHTML = expression;
}

function evaluateResult() {
  expression = eval(expression).toString();
  document.getElementById('result').innerHTML = expression;
}

function clearInput() {
  expression = '';
  document.getElementById('result').innerHTML = 0;
}