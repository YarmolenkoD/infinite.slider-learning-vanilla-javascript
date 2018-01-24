let currentCarousel = null
let currentCarouselWidth = 0
let carouselTrackWidth = 0
let carouselItemWidth = 0
let cursorPosition = null
let cursorMovePosition = null
let currentItem = null
let cloningElement = false
let carouselItemsTrack = false
let arrayOfItems = false
let isAnimation = {}


export function carouselTouchFunctionality(carousel) {
  carousel.dataset.maxItem = `${carousel.children[0].children.length - 1}`
  isAnimation[carousel.id] = false
  setItemsId(carousel.children[0].children)
  carousel.addEventListener('mousedown', carouselTouchDown, false)
  carousel.addEventListener('mousemove', carouselTouchMove, false)
  carousel.addEventListener('mouseup', carouselTouchUp, false)
  document.addEventListener('mouseup', carouselTouchUp, false)
}

function carouselTouchDown(event) {
  event.preventDefault()
  if (event.target.parentNode.parentNode.classList.contains('carousel-item-wrap') || event.target.parentNode.classList.contains('carousel-item-wrap')) {
    currentCarousel = event.target.parentNode.parentNode.parentNode
    if (!isAnimation[currentCarousel.id]) {
      cursorPosition = event.pageX
      cursorMovePosition = event.pageX
      currentItem = parseFloat(event.target.parentNode.dataset.id)
      currentCarouselWidth = parseFloat(getComputedStyle(currentCarousel).width.split('.')[0])
      carouselTrackWidth = currentCarousel.children[0].offsetWidth
      carouselItemWidth = currentCarousel.children[0].children[0].offsetWidth
      carouselItemsTrack = currentCarousel.children[0]
      arrayOfItems = carouselItemsTrack.children
    }
  }
}

function carouselTouchMove(event) {
  if (event.target.parentNode.parentNode.parentNode === currentCarousel) {
    if (!isAnimation[currentCarousel.id]) {
      if (currentCarousel && (parseFloat(event.target.parentNode.dataset.id) === currentItem || parseFloat(event.target.dataset.id) === currentItem)) {
        if (cloningElement) {
          cloningElement = false
        }
        let left = parseInt(carouselItemsTrack.style.left.split('.')[0].match(/[0-9]/g).join(''))
        if (currentItem === 0 && !cloningElement) {
          let lastElement = arrayOfItems[arrayOfItems.length - 1]
          carouselItemsTrack.insertBefore(lastElement, arrayOfItems[0])
          setItemsId(arrayOfItems)
          carouselItemsTrack.style.left = `-${carouselItemWidth + currentCarousel.offsetLeft}px`
          currentItem++
          cloningElement = true
        } else if (currentItem === parseFloat(currentCarousel.dataset.maxItem) && !cloningElement) {
          let firstElement = arrayOfItems[0]
          carouselItemsTrack.appendChild(firstElement)
          setItemsId(arrayOfItems)
          carouselItemsTrack.style.left = `-${currentCarousel.offsetWidth * (currentItem - 1)}px`
          currentItem--
          cloningElement = true
        }
        if (cursorMovePosition > event.pageX && !cloningElement) {
          let maxLeft = carouselTrackWidth - ((carouselTrackWidth / parseInt(currentCarousel.dataset.maxItem)) / 2)
          if (left < maxLeft) {
            let different = event.pageX - cursorMovePosition
            let result = left + different >= maxLeft ? maxLeft : left + parseInt((different + '').match(/[0-9]/g).join(''))
            carouselItemsTrack.style.left = `-${result}px`
          }
          cursorMovePosition = event.pageX
        } else if (cursorMovePosition < event.pageX && !cloningElement) {
          let different = event.pageX - cursorMovePosition
          if (carouselItemsTrack.style.left[0] !== '-') {
            carouselItemsTrack.style.left = `${left + different}px`
          } else {
            carouselItemsTrack.style.left = `-${left - different}px`
          }
          cursorMovePosition = event.pageX
        }
      }
    }
  }
  cursorMovePosition = event.pageX
}

function carouselTouchUp (event) {
  if (true) {
    if (currentCarousel && true) {
      if (currentCarousel && cursorPosition < event.pageX) {
        let nextPosition = (currentItem - 1) * currentCarouselWidth
        let currentPosition = parseInt(currentCarousel.children[0].style.left.split('.')[0].match(/[0-9]/g).join(''))
        let currentCarouselTrack = currentCarousel.children[0]
        sliderAnimation(currentPosition, nextPosition, currentCarouselTrack)
      } else if (currentCarousel && cursorPosition > event.pageX) {
        let isMaxItem = false
        if (currentItem === parseInt(currentCarousel.dataset.maxItem)) {
          isMaxItem = true
        }
        let nextPosition = (isMaxItem ? currentItem : currentItem + 1) * carouselItemWidth
        let currentPosition = parseInt(currentCarousel.children[0].style.left.split('.')[0].match(/[0-9]/g).join(''))
        let currentCarouselTrack = currentCarousel.children[0]
        sliderAnimation(currentPosition, nextPosition, currentCarouselTrack, true)
      }
    }
  }
  clearVariables()
}

function clearVariables () {
  currentCarousel = null
  currentCarouselWidth = 0
  carouselTrackWidth = 0
  cursorPosition = null
  currentItem = null
  cursorMovePosition = 0
  cloningElement = false
}

function sliderAnimation(currentPosition, nextPosition, currentCarouselTrack, isLast) {
  if (!isAnimation[currentCarouselTrack.parentNode.id]) {
    isAnimation[currentCarouselTrack.parentNode.id] = true
    let timer = setInterval(() => {
      if (isLast) {
        if (nextPosition - currentPosition > 250) {
          currentPosition += 14
        } else if (nextPosition - currentPosition > 150) {
          currentPosition += 10
        } else {
          currentPosition += 5
        }
        if (currentPosition <= nextPosition) {
          isAnimation[currentCarouselTrack.parentNode.id] = true
          setPosition(currentPosition)
        } else {
          isAnimation[currentCarouselTrack.parentNode.id] = false
          setPosition(nextPosition)
          clearInterval(timer)
          return
        }
      } else {
        if (currentPosition - nextPosition > 250) {
          currentPosition -= 14
        } else if (currentPosition - nextPosition > 150) {
          currentPosition -= 10
        } else {
          currentPosition -= 5
        }
        if (currentPosition >= nextPosition) {
          isAnimation[currentCarouselTrack.parentNode.id] = true
          setPosition(currentPosition)
        } else {
          isAnimation[currentCarouselTrack.parentNode.id] = false
          setPosition(nextPosition)
          clearInterval(timer)
          return
        }
      }
    }, 5)

    function setPosition(position) {
      currentCarouselTrack.style.left = `-${position}px`
    }
  }
}

function setItemsId(arrayOfItems) {
  for (let i = 0; i < arrayOfItems.length; i++) {
    arrayOfItems[i].dataset.id = `${i}`
  }
}