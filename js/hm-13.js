'use strict'


class Validation{
  constructor(config) {
    this.form = document.forms[config.form]
    this.email = this.form.email
    this.url = this.form.url
    this.button = this.form.button
    this.email.addEventListener('input', (e) => {
      this.validateEmail(e.target)
    })
    this.url.addEventListener('input', (e) => {
      this.validateURL(e.target)
    })

    this.form.addEventListener('submit', (e) => {
      e.preventDefault()

      const isValid = 
      this.validateEmail(this.email) &&
      this.validateURL(this.url) 

      this.button.disabled = !isValid
      if(isValid) alert('form submitted!')
        
    })
  }

  showError(input, message){
    this.removeError(input)
    input.classList.add('invalid')
    input.insertAdjacentHTML('afterend', `<p class = 'error'>${message}</p>`)
  }

  removeError(input){
    input.classList.remove('invalid')
    const next = input.nextElementSibling
    if(next && next.classList.contains('error')){
      next.remove()
    }
  }


  validateEmail(input){
    const emailPattern = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/
    if(!emailPattern.test(input.value.trim())){
      this.showError(input, 'Incorrect email')
      return false
    }
    this.removeError(input)
    return true
  }

  validateURL(input){
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/S*)?$/
    if(!urlPattern.test(input.value.trim())){
      this.showError(input, 'Invalid URL')
      return false
    }
    this.removeError(input)
    return true
  }
}




const form = new Validation(
  {
    form: 'form',
    email: 'email',
    url: 'url',
    button: 'button',
  }
)
console.log(form.button)

