import { carouselTouchFunctionality } from './carouselFunctionality'

export function createCarousel (data) {
  let carousel = document.getElementById(data.carouselId)
  carousel.children[0].style.maxWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.minWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.left = `0`
  // for (let i = 0; i < carousel.children[0].children.length; i++) {
  //   carousel.children[0].children[i].style.width = '600px'
  // }
  carouselTouchFunctionality(carousel)
  // let itemShow = data.items
  // let carouselItems = carousel.children[0].children
  // let countOfItems = carouselItems.length
  // for (let i = 0; i < countOfItems; i++) {
  //   carouselItems[i].style.minWidth = `${100 / itemShow}%`
  // }
  // if (data.arrow) {
  //   let arrowContainer = document.createElement('div')
  //   let leftArrow = document.createElement('span')
  //   let rightArrow = document.createElement('span')
  //   arrowContainer.classList.add('arrow-container')
  //   rightArrow.className = 'arrow right'
  //   leftArrow.className = 'arrow left'
  //   carousel.appendChild(arrowContainer)
  // }
  // if (data.controls && countOfItems > itemShow) {
  //   let controlsContainer = document.createElement('ul')
  //   controlsContainer.classList.add('controls-item')
  //   for (let i = 0; i < Math.ceil(countOfItems / itemShow); i++) {
  //     let controlsItem = document.createElement('li')
  //     controlsItem.classList.add('control-item')
  //     controlsContainer.appendChild(controlsItem)
  //     controlsItem.addEventListener('click', selectPage, false)
  //   }
  //   carousel.appendChild(controlsContainer)
  // }
}