const num1Input = document.getElementById('num1')
const num2Input = document.getElementById('num2')
const addButton = document.getElementById('add')
const subtractButton = document.getElementById('subtract')
const multipleButton = document.getElementById('multiple')
const divideButton = document.getElementById('divide')
const resetButton = document.getElementById('reset')
const resultH1 = document.getElementById('result')

function add() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const sum = num1 + num2
    resultH1.textContent = `Результат: ${sum}`
}

function subtract() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const d = num1 - num2
    resultH1.textContent = `Результат: ${d}`
}

function multiply() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    const product = num1 * num2
    resultH1.textContent = `Результат: ${product}`
}

function divide() {
    const num1 = parseFloat(num1Input.value)
    const num2 = parseFloat(num2Input.value)
    if (num2 == 0) {
        resultH1.textContent = 'Деление на ноль невозможно'
    } else {
        const q = num1 / num2
        resultH1.textContent = `Результат: ${q}`
    }
}
function reset() {
    resultH1.textContent = `Результат`
}
addButton.addEventListener('click', add)
subtractButton.addEventListener('click', subtract)
multipleButton.addEventListener('click', multiply)
divideButton.addEventListener('click', divide)
resetButton.addEventListener('click', reset)
console.log('hello')