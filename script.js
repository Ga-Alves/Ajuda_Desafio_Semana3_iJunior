const submit = document.querySelector('.submit')
const continueBtn = document.querySelector('.continue')

const form = document.querySelector('.form')
const successMessage = document.querySelector('.success-message')

// INPUTS
const inputName = document.querySelector('.input-name')
const inputNumber = document.querySelector('.input-number')
const inputExpMM = document.querySelector('.input-exp-MM')
const inputExpYY = document.querySelector('.input-exp-YY')
const inputCVC = document.querySelector('.input-cvc')


//CARD
const cardName = document.querySelector('.card-name')
const cardNumber = document.querySelector('.card-number')
const cardExpDate = document.querySelector('.card-expdate')
const cardCVC = document.querySelector('.cvc')


//ERROS
const erroName = document.querySelector('.error-name')
const erroNumber = document.querySelector('.error-number')
const erroExpDate = document.querySelector('.error-expdate')
const erroCVC = document.querySelector('.error-cvc')
const erroGeneral = document.querySelector('.error-general')



//FUCTIONS
function thereIsNumber(str) {
    return str.match(/\d/g) != null
}

function thereIsLetter(str){
    return str.match(/[a-zA-Z]/g) != null
}

// EVENTS

inputName.addEventListener('input', (e) => {
    cardName.innerText = e.target.value
    
    erroName.style.display = 'none'
    e.target.style.color = 'black'
    if (thereIsNumber(e.target.value)) {
        erroName.style.display = 'block'

        e.target.style.color = 'red'
    }
})

inputNumber.addEventListener('input', (e) => {
    cardNumber.innerText = e.target.value

    erroNumber.style.display = 'none'
    e.target.style.color = 'black'
    if (thereIsLetter(e.target.value)) {
        erroNumber.style.display = 'block'
        e.target.style.color = 'red'
    }
})

inputExpMM.addEventListener('input', (e) => {
    const year = inputExpYY.value == null ? '00' : inputExpYY.value
    
    cardExpDate.innerText = e.target.value + '/' + year

    erroExpDate.style.display = 'none'
    e.target.style.color = 'black'
    if (thereIsLetter(e.target.value)) {
        erroExpDate.style.display = 'block'
        e.target.style.color = 'red'
    }

})

inputExpYY.addEventListener('input', (e) => {
    const month = inputExpMM.value == null ? '00' : inputExpMM.value
    cardExpDate.innerText = month + '/' + e.target.value

    erroExpDate.style.display = 'none'
    e.target.style.color = 'black'
    if (thereIsLetter(e.target.value)) {
        erroExpDate.style.display = 'block'
        e.target.style.color = 'red'
    }
})

inputCVC.addEventListener('input', (e) => {
    cardCVC.innerText = e.target.value

    erroCVC.style.display = 'none'
    e.target.style.color = 'black'
    if (thereIsLetter(e.target.value)) {
        erroCVC.style.display = 'block'
        e.target.style.color = 'red'
    }
})


submit.addEventListener('click', () => {
    const error = 
        thereIsNumber(inputName.value) || 
        thereIsLetter(inputNumber.value) ||
        thereIsLetter(inputExpMM.value) ||
        thereIsLetter(inputExpYY.value) ||
        thereIsLetter(inputCVC.value);
    
        erroGeneral.style.display = 'none'
        if (error) {
        erroGeneral.style.display = 'block'
    } else {
        form.style.display = 'none'
        successMessage.style.display = 'flex'
    }

})

continueBtn.addEventListener('click', () => {
    form.style.display = 'block'
    successMessage.style.display = 'none'
})