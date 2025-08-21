'use strict'

// 1

const container = document.body

function createDomElement(tagName, textContent, container) {
  const element = document.createElement(`${tagName}`)
  element.textContent = textContent
  container.prepend(element)
  return element
}

console.log(createDomElement('p', 'This paragraph has been added to the specified container.', container))



//2

const setUserInfoCookie = (key, value) => {
  const encodedKey = encodeURIComponent(key)
  const encodedValue = encodeURIComponent(value)
  const cookie = `${encodedKey}=${encodedValue}`

  const time = new Date(Date.now() + 10 * 1000).toUTCString()

  document.cookie = `userInfo=${cookie}, expires=${time}`

}

setUserInfoCookie('language', 'en');



// 3

const saveUserInfo = (key, value) => {
  sessionStorage.setItem(key, value)
  console.log(`Saved ${key}: ${value}`)
  return value
}

const getUserInfo = (key) => {
  const value = sessionStorage.getItem(key)
  console.log(`Retrieved ${key}:`, value)
  return value
}


saveUserInfo('username', 'JohnDoe');
console.log(getUserInfo('username')); 