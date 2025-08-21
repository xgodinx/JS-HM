'use strict'


class Slider {
  constructor(newSlider){

    // DOM elements
    this.slider = document.querySelector(newSlider.slider)
    this.counter = document.querySelector(newSlider.counter)
    this.viewport = document.querySelector(newSlider.viewport)
    this.track = document.querySelector(newSlider.track)
    this.images = document.querySelectorAll(newSlider.img)
    this.lastElement = this.images.length - 1
    this.prevBtn = document.querySelector(newSlider.sliderBtnPrev)
    this.nextBtn = document.querySelector(newSlider.sliderBtnNext)
    this.sliderPlayBtn = document.querySelector(newSlider.sliderAutoPlay)
    this.sliderStopBtn = document.querySelector(newSlider.sliderAutoStop)
    this.sliderPlayText = document.querySelector(newSlider.statusStarted)
    this.sliderHideText = document.querySelector(newSlider.statusHide)
    this.sliderStopText = document.querySelector(newSlider.statusStopped)
    this.dotsElement = document.querySelector(newSlider.dots)
    this.container = document.querySelector('.container')


    // Static 
    this.currentIndex = 0
    this.viewportWidth = this.viewport.clientWidth - 40
    this.interval = null
    this.pressed = false
    this.colorInterval = null

    // touch
    this.dots = []
    this.startX = 0
    this.currentTranslate = 0
    this.prevTranslate = 0
    this.isTouch = false


    // events navgations

    this.nextBtn.addEventListener('click', () => this.turnNextSlide())
    this.prevBtn.addEventListener('click', () => this.turnPrevSlide())
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight') this.turnNextSlide()
      if(event.key === 'ArrowLeft') this.turnPrevSlide()
    })


    // autoplay events

    this.sliderPlayBtn.addEventListener('click', () => this.startAutoPlay())
    this.sliderStopBtn.addEventListener('click', () => this.stopAutoPlay())


    // show, hide events

    this.sliderHideText.addEventListener('click', () => {
      if(!this.pressed) {
        this.sliderHideText.textContent = 'Show text'
        this.hideText()
        this.pressed = true
      }else{
        this.sliderHideText.textContent = 'Hide text'
        this.showText()
        this.pressed = false
      }
    })
    
    // touch events

    this.track.addEventListener('touchstart', (e) => this.touchStart(e))
    this.track.addEventListener('touchmove', (e) => this.touchMove(e))
    this.track.addEventListener('touchend', () => this.touchEnd())


    // resize event

    window.addEventListener('resize', () => this.updateSliderResize())
    this.resizeObserver = new ResizeObserver(() => this.resizeContainer())
    this.resizeObserver.observe(this.slider)  

    // init 
    this.createDots()
    this.updateDots()
    this.updateSliderResize()
    this.resizeContainer()
  }

  // navigation funcs

  currentSlide(){
  this.track.style.transform = `translateX(${-this.currentIndex * this.viewportWidth}px)`
}


  nextSlide(index){
    if(index < 0) index = 0
    if(index > this.lastElement) index = 0

    this.currentIndex = index

    this.currentSlide()
    this.changeCounter()
    this.disableButtons()
    this.updateDots()
  }

  turnNextSlide(){
    this.nextSlide(this.currentIndex + 1)
    this.changeColorOneTime()
  }
  turnPrevSlide(){
    this.nextSlide(this.currentIndex - 1)
    this.changeColorOneTime()
  }

  // funcs autoPlay

  startAutoPlay(){
    if(this.interval !== null) return
    if (!this.pressed) {
      this.sliderPlayText.style.display = 'inline-block'
      this.sliderStopText.style.display = 'none'
    }
    this.interval = setInterval(() => {
      this.nextSlide(this.currentIndex + 1)
    }, 1500);
    this.startColorChange()
  }


  stopAutoPlay() {
    if(this.interval === null) return
    clearInterval(this.interval)
    if (!this.pressed) {
      this.sliderStopText.style.display = 'inline-block'
      this.sliderPlayText.style.display = 'none'
    }
    this.interval = null
    this.stopColorChange()
  }

  
  // buttons disable

  disableButtons() {
    this.prevBtn.disabled = this.currentIndex === 0
    this.nextBtn.disabled = this.currentIndex === this.lastElement
  }

  // counter methods + colors

  changeCounter() {
    this.counter.textContent = `Image № ${this.currentIndex + 1}`
    
  }

  startColorChange(){
    if(this.colorInterval !== null) return
    this.colorInterval = setInterval(() => {
      const randomColor = (min = 0, max = 255) => Math.floor(Math.random() * (max - min + 1) + min)

      const [r,g,b] = [randomColor(), randomColor(), randomColor()]

      this.counter.style.color = `rgb(${r},${g},${b})`
      this.sliderPlayText.style.color = `rgb(${b},${g},${r})`
    }, 1500);

  }

  stopColorChange(){
    if(this.colorInterval === null) return
    clearInterval(this.colorInterval)
    this.colorInterval = null
  }
  

  changeColorOneTime(){
    const randomColor = (min = 0, max = 255) => Math.floor(Math.random() * (max - min + 1) +min )
    const [r,g,b] = [randomColor(), randomColor(), randomColor()]
    this.counter.style.color = `rgb(${r},${g},${b})`
  }
  // hide , show text methods

  hideText(){
    this.sliderStopText.style.display = 'none'
    this.sliderPlayText.style.display = 'none'
    this.counter.style.display = 'none'
    
  }
  showText(){
    if(this.interval !== null){
    this.sliderStopText.style.display = 'none'
    this.sliderPlayText.style.display = 'inline-block'
    }else{
      this.sliderStopText.style.display = 'inline-block'
      this.sliderPlayText.style.display = 'none'
    }
    this.counter.style.display = 'block'
  }


  createDots(){
  this.dots = [...this.images].map((_, index) => {
  const dot = document.createElement('div')
  dot.className = 'slider__dot'
  dot.addEventListener('click', () => this.nextSlide(index)) 
  this.dotsElement.append(dot)
    return dot
  })
}

  updateDots() {
  this.dots.forEach((el, index) => {
    const active = index === this.currentIndex
    el.classList.toggle('active', active)
  })
}

  // touch methods 

  touchStart(event) {
  this.isTouch = true
  this.startX = event.touches[0].clientX
  this.prevTranslate = -this.currentIndex * this.viewportWidth
  this.track.style.transition = 'none'
  
}

touchMove(event) {
  if (!this.isTouch) return
  const currentX = event.touches[0].clientX
  const diff = currentX - this.startX
  this.currentTranslate = this.prevTranslate + diff
  this.track.style.transform = `translateX(${this.currentTranslate}px)`
}

touchEnd() {
  this.isTouch = false
  const movedBy = this.currentTranslate - this.prevTranslate

  if (movedBy < -50 && this.currentIndex < this.lastElement) {
    this.currentIndex++
  } else if (movedBy > 50 && this.currentIndex > 0) {
    this.currentIndex--
  }

  this.track.style.transition = 'transform 0.5s ease'
  this.currentSlide()
  this.disableButtons()
  this.updateDots()
  this.changeCounter()
  this.changeColorOneTime()
}

  // resize methods
  updateSliderResize() {
  this.viewportWidth = this.viewport.clientWidth
  this.currentSlide()
  }


  resizeContainer() {
  const sliderWidth = this.slider.offsetWidth
  this.container.style.width = '100%'
}


  
}

// config

const newSlider = new Slider(
  {
    slider: '.slider',
    counter: '.counter',
    viewport: '.slider__viewport',
    track: '.slider__track',
    img: '.slider__img',
    sliderBtnNext: '.slider__btn--next',
    sliderBtnPrev: '.slider__btn--prev',
    sliderAutoPlay: '.slider__play',
    sliderAutoStop: '.slider__stop',
    statusStarted: '.status__started',
    statusStopped: '.status__stopped',
    statusHide: '.slider__hide-btn',
    dots: '.slider__dots',
  }
)
