'use strict'

const adult = document.querySelector('.abult')

function countSum(){
  const valuesNode = adult.querySelectorAll('.value')
  console.log(valuesNode)  

  const values = [...valuesNode]
  console.log(values)
  const numbers = values.map((num) => {
    return +num.textContent
  })
  console.log(numbers)
  const sum = numbers.reduce((acc, value) => {
    return acc + value
  },0)
  return sum
}


function showAdultError(input, message){
  removeAdultError(input)

  input.insertAdjacentHTML('beforeend', `<p class = 'error big'>${message}</p>`)
}

function removeAdultError(input){
  const last = input.lastElementChild
  if(last && last.classList.contains('error')) last.remove()
}

adult.addEventListener('click', (e) => {
  const abultRow = e.target.closest('.abult__row')
  if (!abultRow) return

  let value = abultRow.querySelector('.value')
  const counter = abultRow.querySelector('.counter')
  const plus = counter.querySelector('.plus')
  const btn = abultRow.querySelector('.btn')

  console.log('target',e.target)


  if(e.target.closest('.btn')){
    btn.classList.add('notVisible')
    counter.classList.add('visible')
  }

  

  if(e.target.closest('.minus')){
    console.log('val',value)
    Number((value.textContent -= 1))
    if(+value.textContent <= 0){
      btn.classList.remove('notVisible')
      counter.classList.remove('visible')
      value.textContent = 0
    }
    const pluses = document.querySelectorAll('.plus')
      pluses.forEach((plus) => {
        plus.removeAttribute('disabled')
        plus.style.opacity = '1'
      })
       
      removeAdultError(adult)
  }

  if(e.target.closest('.plus')){
    console.log('plus', plus)
    value.textContent = Number(value.textContent) + 1
    removeAdultError(adult)
    let maxNumber = countSum()
    if(maxNumber >= 18){
      const pluses = document.querySelectorAll('.plus')
      pluses.forEach((plus) => {
        plus.setAttribute('disabled', true)
        plus.style.opacity = '0.5' 
      })
      showAdultError(adult, 'You can buy only 18 tickets')
    }
    
  }
})
