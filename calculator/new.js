document.getElementById('add').onclick = function() {
    calculate('+');
};

document.getElementById('sub').onclick = function() {
    calculate('-');
};

document.getElementById('mul').onclick = function() {
    calculate('*');
};

document.getElementById('div').onclick = function() {
    calculate('/');
};

document.getElementById('clear').onclick = function() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('res').innerText = '';
};
function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Please enter valid numbers';
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operation';
        }
    }

    document.getElementById('res').innerText = 'Result: ' + result;
}
