'use strict'

const formVal = document.forms['valForm']

const login = formVal.login

const pass = formVal.password
const email = formVal.email
const radio = formVal.radio
const checkbox = formVal.checkbox
const textarea = formVal.textarea
const button = formVal.button
const radioBoss = document.querySelector('.radio__boss')
const checkboxBoss = document.querySelector('.form__checkbox')
const count = document.querySelector('.textarea__count')
let isValid = false
function showError(input , message){
  removeError(input)

  input.insertAdjacentHTML('afterend', `<p class="error">${message}</p>`)
}


function removeError(input){
  const nextEl = input.nextElementSibling
  if(nextEl && nextEl.classList.contains('error')) nextEl.remove()
}


function validateLogin(login){
  if(login === '' || login.value.length < 4){
    showError(login, 'at least 4 chars')
    return false
  }
  removeError(login)
  return true
}


function validatePass(password){
  if(password.value.length < 6){
    showError(password, 'too short')
    return false
  }
  removeError(password)
  return true
}

function validateEmail(email){
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(email.value)){
    showError(email, 'wrong email')
    return false
  }
  removeError(email)
  return true
}

function validateRadio(radio){
  const checked = [...radio]
  .filter((g) => g.checked)

  if(checked.length === 0){
    showError(radioBoss, ' choose gender')
    return false
  }
  removeError(radioBoss)
  return true
}

function validateCheckbox(checkbox){
  if(!checkbox.checked){
    showError(checkboxBoss,'agree with terms')
    return false
  }
  removeError(checkboxBoss)
  return true
}


function validateTextarea(textarea) {
  const textLength = textarea.value.length
  const maxLength = textarea.getAttribute('maxlength')
  count.textContent = `Symbols left: ${maxLength - textLength}`
  if(textLength < 10 || textLength > 50){
    showError(textarea, 'too short')
    return false
  }
  
  removeError(textarea)
  return true
}


formVal.addEventListener('input', (e) => {
  validateLogin(login)
  validatePass(pass)
  validateEmail(email)
  validateTextarea(textarea)
  checkValid()
})

formVal.addEventListener('change', (e) => {
  validateRadio(radio)
  validateCheckbox(checkbox)
  checkValid()
})

function checkValid() {
  isValid = 
  validateLogin(login) &&
  validatePass(pass) &&
  validateEmail(email) &&
  validateTextarea(textarea) && 
  validateRadio(radio) &&
  validateCheckbox(checkbox) 
  button.disabled = !isValid
  if(isValid){
    removeFormError(formVal)
  }
}


function showErrorForForm(form){
  removeFormError(form)

  form.insertAdjacentHTML('afterbegin', '<p class = "error">Fill the form!</p>')
}

function removeFormError(form){
  const first = form.firstElementChild
  if(first && first.classList.contains('error')) first.remove()
}

formVal.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log(isValid)
  if(isValid){
    alert('form submitted!')
    
  }
  else{
    showErrorForForm(formVal)
  }
  
})