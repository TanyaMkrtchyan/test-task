const sliderWrapper = document.querySelector('.slider-wrapper')
const slider = document.querySelector('.modatech-look-widgets')
const slideItem = document.querySelectorAll('.modatech-look-widget-container')
const totalSlides = slideItem.length
let currentIndex = 0

// left and right buttons
const prevButton = document.createElement('button')
prevButton.innerHTML = '<'
prevButton.classList.add('arrow-btn', 'prev')
slider.appendChild(prevButton)

const nextButton = document.createElement('button')
nextButton.innerHTML = '>'
nextButton.classList.add('arrow-btn', 'next')
slider.appendChild(nextButton)


const showSlide = (index) => {
  slideItem.forEach((slide, i) => {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`
  })

  const prevButton = document.querySelector('.prev')
  const nextButton = document.querySelector('.next')

  currentIndex === 0 ? prevButton.style.display = 'none' : prevButton.style.display = 'block'
  currentIndex === totalSlides - 1 ? nextButton.style.display = 'none' : nextButton.style.display = 'block'
}

showSlide(currentIndex)

// next button click
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides
  showSlide(currentIndex)
})


// prev button click
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
  showSlide(currentIndex)
})    


// for swipe
let startX = 0
let endX = 0

slider.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX
})

slider.addEventListener('touchmove', (e) => {
  endX = e.touches[0].clientX
})

slider.addEventListener('touchend', () => {
  const diff = startX - endX

  if (Math.abs(diff) > 50) {

    if (diff > 0 && currentIndex < totalSlides - 1)  {
      currentIndex = (currentIndex + 1) % totalSlides
    } else if (diff < 0 && currentIndex > 0) {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides
    }

    showSlide(currentIndex)
  } 
})