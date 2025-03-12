let operation_type="";

function operation(op) {
    operation_type = op;
}

function calculate() {
    const a = parseFloat(document.getElementById('number1').value);
    const b = parseFloat(document.getElementById('number2').value);
    let result;

    switch(operation_type) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        default:
            result = "Retry";
    }
    document.getElementById('result').innerText = "Voici le résultat : " + result;
}