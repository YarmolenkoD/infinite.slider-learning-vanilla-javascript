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
}