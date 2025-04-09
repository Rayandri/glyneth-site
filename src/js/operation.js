let expression = '';

function appendValue(val) {
  expression += val;
  document.getElementById('display').textContent = expression;
}

function clearDisplay() {
  expression = '';
  document.getElementById('display').textContent = '0';
}

function calculate() {
  try {
    const result = eval(expression);
    expression = result.toString();
    document.getElementById('display').textContent = result;
  } catch (e) {
    document.getElementById('display').textContent = 'Erreur';
    expression = '';
  }
}
