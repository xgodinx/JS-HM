'use strict'


createTestList() 

const body = document.body

const buttonELement = document.createElement('button')

buttonELement.id = 'btn'
buttonELement.textContent = "Press"

buttonELement.style.cssText = `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 20px;
  line-height: 20px;
  font-size: 18px;
  color: blue;
`

body.append(buttonELement)


// 1

const findElement = (buttonId, message) => {
  const button = document.getElementById(buttonId)
  button.addEventListener('click', (event) => {
    console.log(message)
  })
}

findElement('btn', "Button clicked")


// 2 
let count = 0
let timerId = null

const trackMousePosition = () => { 
  document.addEventListener('mousemove', (event) => {
    if(count < 15){
      timerId = setTimeout(() => {
      console.log(`latitude: ${event.clientX}, longtitude: ${event.clientY}`)
    }, 0);
    count++
    }
  })
}
trackMousePosition()



// 3


const setupEventDelegation = (selector) => {
  const list = document.querySelector(selector)
  list.style.cursor = 'pointer'
  list.addEventListener('click', (event) => {
    if(event.target.closest('li')){
      console.log(`Item clicked: ${event.target.textContent}`) 
    }
  })
}


function createTestList() {
  document.body.innerHTML = `
    <ul id="testList">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    `
}

setupEventDelegation('#testList')



