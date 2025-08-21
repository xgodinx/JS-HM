'use strict'

const formFilm = document.forms['film-form']
const nameInput = formFilm.title
const yearInput = formFilm.year
const type = document.querySelector('.search__type')
const typeMenu = document.querySelector('.type__list')
const typeMenuList = document.querySelectorAll('.list__point')
const typeTitle = document.querySelector('.type__title-span')
let selectedType = null
const searchResult = document.querySelector('.search__result') 
const API_BASE_URL = 'https://www.omdbapi.com/?apikey=276a9b5'

// s = search
// y = year
// type = type

function debounce(fn, delay = 500) {
  let timeoutId

  return function (...args) {
    const context = this;

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      fn.apply(context, args)
    }, delay)
  }
}

document.addEventListener('click' , (e) => {
  if(e.target.closest('.search__type'))
  typeMenu.classList.toggle('open')

  if(e.target.closest('li')){
    typeTitle.innerHTML = e.target.closest('li').textContent

    typeMenuList.forEach((e) => {
      e.classList.remove('checked')
    })
    e.target.closest('li').classList.add('checked')

    selectedType = document.querySelector('.list__point.checked').textContent.toLowerCase()
    searchFilms()
  }

  if(!e.target.closest('.form__search-title')){
    typeTitle.innerHTML = 'Select type'
    typeMenuList.forEach((e) => {
      e.classList.remove('checked')
    })
  }

  
})



async function getFilm(url,name, year='',type='') {
  try{
    const res = await fetch(`${url}&s=${name}`+`&y=${year}`+`&type=${type}`)
    if(!res.ok){
      throw new Error('failed to get film')
    }
    return res.json()

  }catch(error){
    searchResult.textContent = error
  }
}

async function searchFilms() {
  const searchedFilm = await getFilm(API_BASE_URL, nameInput.value, yearInput.value, selectedType)

  console.log(searchedFilm)

  if (!nameInput.value.trim()) {
    searchResult.innerHTML = "Enter the name"
    return
  }

  if (searchedFilm.Response === 'False') {
    searchResult.innerHTML = searchedFilm.Error || "Movie not found!"
    return;
  }

  searchResult.innerHTML = ""; 
  searchedFilm.Search.forEach((film) => {
    const { Title, Year, Type } = film
    searchResult.innerHTML += `
      <p>Title: ${Title}, year: ${Year}, type: ${Type}</p>
    `
  })
}

formFilm.addEventListener('input', debounce(searchFilms, 500))

