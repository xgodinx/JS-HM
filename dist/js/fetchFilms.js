'use strict'

const API_BASE_URL = 'https://www.omdbapi.com/?apikey=276a9b5'
const form = document.forms['formfetch']
const result = document.querySelector('.search__result')
let type = null
const total = document.querySelector('.total__results')
console.log(form)

//s - search
// y - year
// type - type

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

async function getFilm(url,name,year,type='') {
  try{
    const response = await fetch(`${url}&s=${name}&y=${year}&type=${type}`)
    console.log('fn',response)
    if(!response.ok || !response){
      throw new Error('fetch failed')
    }
    
    return response.json()
  }
  catch(error){
    result.innerHTML = 'Movie not found'
    console.log(error)
  }
}

async function startSearchFilm() {
  const searchName = form.name2.value.trim()
  const searchYear = form.year2.value.trim()
  type = form.type.value
  const searchedFilm = await getFilm(API_BASE_URL, searchName, searchYear, type)
  console.log('sr',searchedFilm)
  if(!searchName){
    result.innerHTML = 'Enter the name'
    return
  }
  if(searchedFilm.Response === 'False'){
    result.innerHTML = searchedFilm.Error || 'Movie not found'
    return
  }
  result.innerHTML = ''
  console.log(searchedFilm.totalResults)
  total.innerHTML = `<p class='total-results'>Total results:${searchedFilm.totalResults}</p>`
  searchedFilm.Search.forEach((film) => {
    const {Title, Year, Type} = film
    result.innerHTML += `
    <p>Title: ${Title}, Year: ${Year}, Type: ${Type}</p>
    `
  })
}


form.addEventListener('input', debounce(startSearchFilm))
form.addEventListener('change', debounce((e) => {
  if(type === '') return
  else{
    startSearchFilm()
  }
}))


const formSearch = document.forms['submit']
const results = document.querySelector('.search__results')

async function fetchFilm(name, year, type) {
  try{
    const url = `${API_BASE_URL}&s=${name}&y=${year}&type=${type}`

    const response = await fetch(url)
    console.log('response',response)

    if(!response.ok){
      throw new Error('fetch error')
    }

    const resJSON = await response.json()
    console.log('json',resJSON)


    if(resJSON.Response === 'True'){
      return resJSON.Search
    }
    else{
      return []
    }

  }catch(error){
    console.log(error)
    return []
  }
}


async function showFilm(container) {

  const nameInput = formSearch.input__name.value
  const yearInput = formSearch.input__year.value
  const typeInput = formSearch.select__type.value

  const searchedFilms = await fetchFilm(nameInput,yearInput,typeInput)

  console.log('search',searchedFilms)
  container.innerHTML = ''
  if(searchedFilms.length > 0){
    searchedFilms.forEach((film) => {

      const {Title, Year, Type, Poster} = film

      container.innerHTML += `
      <div class = 'films'>
        <img src= "${Poster}" alt="" />
        <div class = 'films__info'>
            <p>Title: ${Title}</p>
            <p>Year: ${Year}</p>
            <p>Type: ${Type}</p>
        </div>
      </div>
      `
    })
  }
  else{
    container.innerHTML = 'Movie not found'
  }
}

formSearch.addEventListener('submit', async (e) => {
  e.preventDefault()

  showFilm(results)
})