import { carouselTouchFunctionality } from './carouselFunctionality'

//This function creates a slider
export function createCarousel (data) {
  let carousel = document.getElementById(data.carouselId)
  carousel.children[0].style.maxWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.minWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.left = `0`
  carouselTouchFunctionality(carousel)
  if (data.arrows) {
    let rightArrow = document.createElement('span')
    let leftArrow = document.createElement('span')
    rightArrow.classList.add('right-arrow')
    leftArrow.classList.add('left-arrow')
    carousel.appendChild(rightArrow)
    carousel.appendChild(leftArrow)
  }
  if (data.indicators) {
    let containerOfIndicators = document.createElement('ul')
    containerOfIndicators.classList.add('indicators-container')
    for (let i = 0; i < carousel.children[0].children.length; i++) {
      let indicator = document.createElement('li')
      indicator.classList.add('indicator')
      indicator.dataset.id = `${i}`
      if (i === 0) {
        indicator.classList.add('active')
      }
      containerOfIndicators.style.marginLeft = `-${carousel.children[0].children.length * 30 - ((carousel.children[0].children.length * 30) / 2)}px`
      containerOfIndicators.style.zIndex = '10'
      containerOfIndicators.appendChild(indicator)
    }
    carousel.appendChild(containerOfIndicators)
  }
}