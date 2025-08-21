'use strict'


// DOM elements

const slider = document.querySelector('.slider')
const viewport = document.querySelector('.slider__viewport')
const track = document.querySelector('.slider__track')
const images = document.querySelectorAll('.slider__img')
const prevBtn = document.querySelector('.slider__btn--prev')
const nextBtn = document.querySelector('.slider__btn--next')
const sliderPlayBtn = document.querySelector('.slider__play')
const sliderStopBtn = document.querySelector('.slider__stop')
const sliderPlayText = document.querySelector('.status__started')
const sliderStopText = document.querySelector('.status__stopped')
const dotsElement = document.querySelector('.slider__dots')


// VAR State

let currentIndex = 0
let sliderWidth = viewport.clientWidth
let interval = null
let dots = []
let startX = 0
let currentTranslate = 0
let prevTranslate = 0
let isTouch = false


// functions navigate slider

function directSlide() {
  const offset = -currentIndex * sliderWidth
  track.style.transform = `translateX(${offset}px)`
}


function nextSlide(index){
  const last = images.length - 1
  if(index < 0) index = last
  if(index > last) index = 0
  
  currentIndex = index

  directSlide()
  blockButtons()
  updateDots()
  changeTextColor(0, 255)
}


// functions autoPlay

function startAutoPlay(){
  if(interval !== null) return
    sliderStopText.style.display = 'none'
    sliderPlayText.style.display = 'block'
    interval = setInterval(() => {
    const last = images.length - 1
    const nextIndex = currentIndex === last ? 0 : currentIndex + 1
    nextSlide(nextIndex)
  }, 1000)
  
}

function stopAutoPlay() {
  if(interval === null) return

  sliderPlayText.style.display = 'none'
  sliderStopText.style.display = 'block'
  clearInterval(interval)
  
  interval = null
}


// functions next / prev slides

function turnNextSlide(){
  if(currentIndex !== images.length -1)
  nextSlide(currentIndex + 1)
}

function turnPrevSlide(){
  if(currentIndex !== 0){
    nextSlide(currentIndex -1)
  }
}


// block buttons


function blockButtons(){
  prevBtn.disabled = currentIndex === 0
  nextBtn.disabled = currentIndex === images.length - 1
}


// changing text color

function changeTextColor(min, max){
  const randomColor = () => Math.floor(Math.random() * (max - min + 1) + min)
  const [r, g, b] = [randomColor(), randomColor(), randomColor()]
  sliderPlayText.style.color = `rgb(${r},${g},${b})`
}


// creating Dots

function createDots(){
    dots = [...images].map((el, index) => {
    const dot = document.createElement('div')
    dot.className = 'slider__dot'
    dot.addEventListener('click', () => nextSlide(index))
    dotsElement.append(dot)
    return dot
  })
}

function updateDots() {
  dots.forEach((el, index) => {
    const active = index === currentIndex
    el.classList.toggle('active', active)
  })
}


// functions touch

function touchStart(event){
  isTouch = true
  startX = event.touches[0].clientX
  prevTranslate = -currentIndex * sliderWidth
   track.style.transition = 'none'
}

function touchMove(e){
  if(!isTouch) return
  const currentX = e.touches[0].clientX
  const diff = currentX - startX
  currentTranslate = prevTranslate + diff
  track.style.transform = `translateX(${currentTranslate}px)`
}

function touchEnd(){
  isTouch = false
  const movedBy = currentTranslate - prevTranslate

  if(movedBy < -50 && currentIndex < images.length - 1){
    currentIndex++
  } else if(movedBy > 50 && currentIndex > 0){
    currentIndex--
  }
  track.style.transition = 'transform 0.5s ease'
  directSlide()
  blockButtons()
  updateDots()
}



// events autoPlay

sliderPlayBtn.addEventListener('click', startAutoPlay)
sliderStopBtn.addEventListener('click', stopAutoPlay)

track.addEventListener('mouseenter', stopAutoPlay)

// event keydown

document.addEventListener('keydown', (event) => {
  if(event.key === 'ArrowRight'){
    turnNextSlide()
  }
  else if(event.key === 'ArrowLeft'){
    turnPrevSlide()
  }
})

// events click next / prev slide

prevBtn.addEventListener('click', turnPrevSlide)
nextBtn.addEventListener('click', turnNextSlide)


// touch events

track.addEventListener('touchstart', touchStart)
track.addEventListener('touchmove', touchMove)
track.addEventListener('touchend', touchEnd)



// init

createDots()
updateDots()