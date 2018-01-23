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


export function carouselTouchFunctionality (carousel) {
  carousel.dataset.maxItem = `${carousel.children[0].children.length - 1}`
  isAnimation[carousel.id] = false
  setItemsId(carousel.children[0].children)
  carousel.addEventListener('mousedown', carouselTouchDown, false)
  carousel.addEventListener('mousemove', carouselTouchMove, false)
  carousel.addEventListener('mouseup', carouselTouchUp, false)
  document.addEventListener('mouseup', carouselTouchUp, false)
}

function carouselTouchDown (event) {
  event.preventDefault()
  if (event.target.parentNode.parentNode.classList.contains('carousel-item-wrap') || event.target.parentNode.classList.contains('carousel-item-wrap')) {
    currentCarousel = event.target.parentNode.parentNode.parentNode
    if (!isAnimation[currentCarousel.id]) {
      console.log(99999)
      cursorPosition = event.pageX
      cursorMovePosition = event.pageX
      currentItem = parseFloat(event.target.parentNode.dataset.id)
      currentCarouselWidth = parseFloat(getComputedStyle(currentCarousel).width.split('.')[0])
      carouselTrackWidth = currentCarousel.children[0].offsetWidth
      carouselItemWidth =  currentCarousel.children[0].children[0].offsetWidth
      carouselItemsTrack = currentCarousel.children[0]
      arrayOfItems = carouselItemsTrack.children
    }
  }
}

function carouselTouchMove (event) {
  if (event.target.parentNode.parentNode.parentNode === currentCarousel) {
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
        carouselItemsTrack.style.left = `-${carouselItemWidth + currentCarousel.offsetLeft + (event.pageX - currentCarousel.offsetLeft)}px`
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
    } else if (currentCarousel) {
      if (event.target.parentNode.classList.contains('carousel-item')) {
        currentItem = parseFloat(event.target.parentNode.dataset.id)
      } else if (event.target.classList.contains('carousel-item')) {
        currentItem = parseFloat(event.target.dataset.id)
      }
    }
  }
  cursorMovePosition = event.pageX
}

function carouselTouchUp (event) {
  if (event.target.parentNode.parentNode.parentNode === currentCarousel) {
    if (currentCarousel && currentCarousel.children[0].children[currentItem] === event.target.parentNode) {
      if (currentCarousel && cursorPosition < event.pageX) {
        console.log(8888)
        let nextPosition = (currentItem - 1) * currentCarouselWidth
        let currentPosition = parseInt(currentCarousel.children[0].style.left.split('.')[0].match(/[0-9]/g).join(''))
        let currentCarouselTrack = currentCarousel.children[0]
        sliderAnimation(currentPosition, nextPosition, currentCarouselTrack)
      } else if (currentCarousel && cursorPosition > event.pageX) {
        let nextPosition = (currentItem + 1) * carouselItemWidth
        let currentPosition = currentCarousel.children[0].children[currentItem].offsetLeft
        let currentCarouselTrack = currentCarousel.children[0]
        sliderAnimation(currentPosition, nextPosition, currentCarouselTrack, true)
      }
    }
  } else if (currentCarousel) {
    let nextPosition
    if (cursorPosition > event.pageX) {
      nextPosition = (currentItem + 1) * carouselItemWidth
    } else {
      nextPosition = (currentItem - 1) * currentCarouselWidth
    }
    let currentPosition = currentCarousel.children[0].children[currentItem].offsetLeft
    let isLast = cursorPosition > event.pageX
    sliderAnimation(currentPosition, nextPosition, currentCarousel.children[0], isLast)
  }
  currentCarousel = null
  currentCarouselWidth = 0
  carouselTrackWidth = 0
  cursorPosition = null
  currentItem = null
  cursorMovePosition = 0
  cloningElement = false
}

function sliderAnimation (currentPosition, nextPosition, currentCarouselTrack, isLast) {
  if (!isAnimation[currentCarouselTrack.parentNode.id]) {
    let timer = setInterval(() => {
      if (isLast) {
        currentPosition += 20
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
        currentPosition -= 20
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
    }, 15)
    function setPosition (position) {
      currentCarouselTrack.style.left = `-${position}px`
    }
  }
}

function setItemsId (arrayOfItems) {
  for (let i = 0; i < arrayOfItems.length; i++) {
    arrayOfItems[i].dataset.id = `${i}`
  }
}