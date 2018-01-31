/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCarousel;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carouselFunctionality__ = __webpack_require__(3);


//This function creates a slider
function createCarousel (data) {
  let carousel = document.getElementById(data.carouselId)
  carousel.children[0].style.maxWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.minWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.left = `0`
  Object(__WEBPACK_IMPORTED_MODULE_0__carouselFunctionality__["a" /* carouselTouchFunctionality */])(carousel)
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

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_carousel_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_main_scss__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scss_main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__scss_main_scss__);
// Scripts



// Styles


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__carousel__ = __webpack_require__(0);


//create sliders
window.onload = function() {
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-1',
    arrows: true,
    // indicators: true
  })
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-2',
    // arrows: true
    indicators: true
  })
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-3',
    arrows: true,
    indicators: true
  })
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-4',
    arrows: true
  })
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = carouselTouchFunctionality;
let currentCarousel = {
  carousel: null,
  carouselWidth: 0,
  trackWidth: 0,
  itemWidth: 0,
  currentItem: null,
  items: [],
  track: null,
  length: 0
}
let cursorPosition = null
let cursorMovePosition = null
let cloningElement = false
let isAnimation = {}


function carouselTouchFunctionality (carousel) {
  carousel.dataset.maxItem = `${carousel.children[0].children.length - 1}`
  carousel.dataset.currentItem = '0'
  isAnimation[carousel.id] = false
  setItemsId(carousel.children[0].children)
  // adding events for slider
  carousel.addEventListener('mousedown', carouselTouchDown, false)
  carousel.addEventListener('mousemove', carouselTouchMove, false)
  carousel.addEventListener('mouseup', carouselTouchUp, false)
  document.addEventListener('mouseup', carouselTouchUp, false)
  window.addEventListener('resize', () => {
    if (currentCarousel.carouselWidth && carousel.dataset.currentItem) {
      carousel.children[0].style.left = `-${parseInt(carousel.dataset.currentItem) * carousel.offsetWidth}px`
    }
  })
}

function carouselTouchDown (event) {
  event.preventDefault()
  if (event.target.parentNode.parentNode.classList.contains('carousel-item-wrap') || event.target.parentNode.classList.contains('carousel-item-wrap')) {
    currentCarousel.carousel = event.target.parentNode.parentNode.parentNode
    if (!isAnimation[currentCarousel.carousel.id]) {
      // Getting information about the current slider
      cursorPosition = event.pageX
      cursorMovePosition = event.pageX
      currentCarousel.currentItem = parseFloat(event.target.parentNode.dataset.id)
      currentCarousel.carouselWidth = parseFloat(getComputedStyle(currentCarousel.carousel).width.split('.')[0])
      currentCarousel.trackWidth = currentCarousel.carousel.children[0].offsetWidth
      currentCarousel.itemWidth = currentCarousel.carousel.children[0].children[0].offsetWidth
      currentCarousel.track = currentCarousel.carousel.children[0]
      currentCarousel.items =  currentCarousel.track.children
      currentCarousel.track.style.zIndex = '5'
    }
  } else if (event.target.classList && event.target.classList.contains('right-arrow')) {
    if (!isAnimation[event.target.parentNode.id]) {
      let carousel = event.target.parentNode
      let track = carousel.children[0]
      let currentItem = parseInt(carousel.dataset.currentItem)
      let isMaxItem = false
      if (currentItem === parseInt(carousel.dataset.maxItem)) {
        isMaxItem = true
        let firstElement = track.children[0]
        track.appendChild(firstElement)
        setItemsId(track.children)
        track.style.left = `-${carousel.offsetWidth * (currentItem - 1)}px`
      }
      let nextPosition = (isMaxItem ? currentItem : currentItem + 1) * carousel.offsetWidth
      let currentPosition = parseInt(track.style.left.split('.')[0].match(/[0-9]/g).join(''))
      event.target.parentNode.dataset.currentItem = `${isMaxItem ? currentItem : currentItem + 1}`
      sliderAnimation(currentPosition, nextPosition, track, true)
      let indicatorsContainer = checkIndicators(carousel)
      if (indicatorsContainer) {
        setCurrentIndicator(indicatorsContainer, indicatorsContainer.children[isMaxItem ? currentItem : currentItem + 1])
      }
    }
  } else if (event.target.classList && event.target.classList.contains('left-arrow')) {
    if (!isAnimation[event.target.parentNode.id]) {
      let carousel = event.target.parentNode
      let track = carousel.children[0]
      let currentItem = parseInt(carousel.dataset.currentItem)
      if (currentItem === 0) {
        // get the last element and add this element to the beginning
        let lastElement = track.children[track.children.length - 1]
        track.insertBefore(lastElement, track.children[0])
        setItemsId(track.children)
        track.style.left = `-${carousel.offsetWidth + carousel.offsetLeft}px`
        carousel.dataset.currentItem = `${currentItem++}`
      }
      let nextPosition = (currentItem - 1) * carousel.offsetWidth
      let currentPosition = parseInt(track.style.left.split('.')[0].match(/[0-9]/g).join(''))
      carousel.dataset.currentItem = `${currentItem - 1}`
      sliderAnimation(currentPosition, nextPosition, track)
      let indicatorsContainer = checkIndicators(carousel)
      if (indicatorsContainer) {
        setCurrentIndicator(indicatorsContainer, indicatorsContainer.children[currentItem - 1])
      }
    }
  } else if (event.target.classList && event.target.classList.contains('indicator')) {
    setCurrentIndicator(event.target.parentNode.children, event.target)
    let carousel = event.target.parentNode.parentNode
    let track = event.target.parentNode.parentNode.children[0]
    let currentPosition = parseInt(track.style.left.split('.')[0].match(/[0-9]/g).join(''))
    let nextPosition = parseInt(event.target.dataset.id) * carousel.offsetWidth
    if (parseInt(event.target.dataset.id) > parseInt(carousel.dataset.currentItem)) {
      sliderAnimation(currentPosition, nextPosition, track, true)
    } else {
      sliderAnimation(currentPosition, nextPosition, track)
    }
    carousel.dataset.currentItem = event.target.dataset.id
  }
}

function carouselTouchMove(event) {
  if (event.target.parentNode.parentNode.parentNode === currentCarousel.carousel) {
    // Checking if this slider is animated
    if (!isAnimation[currentCarousel.carousel.id]) {
      if (currentCarousel.carousel && (parseFloat(event.target.parentNode.dataset.id) === currentCarousel.currentItem || parseFloat(event.target.dataset.id) === currentCarousel.currentItem)) {
        if (cloningElement) {
          cloningElement = false
        }
        let left = parseInt(currentCarousel.track.style.left.split('.')[0].match(/[0-9]/g).join(''))
        if (currentCarousel.currentItem === 0 && !cloningElement) {
          // get the last element and add this element to the beginning
          let lastElement = currentCarousel.items[currentCarousel.items.length - 1]
          currentCarousel.track.insertBefore(lastElement, currentCarousel.items[0])
          setItemsId(currentCarousel.items)
          currentCarousel.track.style.left = `-${currentCarousel.itemWidth + currentCarousel.carousel.offsetLeft}px`
          currentCarousel.currentItem++
          cloningElement = true
        } else if (currentCarousel.currentItem === parseFloat(currentCarousel.carousel.dataset.maxItem) && !cloningElement) {
          // get the first element and add this element to the end
          let firstElement = currentCarousel.items[0]
          currentCarousel.track.appendChild(firstElement)
          setItemsId(currentCarousel.items)
          currentCarousel.track.style.left = `-${currentCarousel.carousel.offsetWidth * (currentCarousel.currentItem - 1)}px`
          currentCarousel.currentItem--
          cloningElement = true
        }
        // positioning the slider
        if (cursorMovePosition > event.pageX && !cloningElement) {
          let maxLeft = currentCarousel.trackWidth - ((currentCarousel.trackWidth / parseInt(currentCarousel.carousel.dataset.maxItem)) / 2)
          if (left < maxLeft) {
            let different = event.pageX - cursorMovePosition
            let result = left + different >= maxLeft ? maxLeft : left + parseInt((different + '').match(/[0-9]/g).join(''))
            currentCarousel.track.style.left = `-${result}px`
          }
          cursorMovePosition = event.pageX
        } else if (cursorMovePosition < event.pageX && !cloningElement) {
          let different = event.pageX - cursorMovePosition
          if (currentCarousel.track.style.left[0] !== '-') {
            currentCarousel.track.style.left = `${left + different}px`
          } else {
            currentCarousel.track.style.left = `-${left - different}px`
          }
          cursorMovePosition = event.pageX
        }
      }
    }
  }
  cursorMovePosition = event.pageX
}

function carouselTouchUp (event) {
  if (currentCarousel.carousel) {
    if (currentCarousel.carousel && cursorPosition < event.pageX) {
      let nextPosition = (currentCarousel.currentItem - 1) * currentCarousel.carouselWidth
      let currentPosition = parseInt(currentCarousel.carousel.children[0].style.left.split('.')[0].match(/[0-9]/g).join(''))
      let currentCarouselTrack = currentCarousel.carousel.children[0]
      currentCarousel.carousel.dataset.currentItem = `${currentCarousel.currentItem - 1}`
      sliderAnimation(currentPosition, nextPosition, currentCarouselTrack)
      currentCarousel.track.style.zIndex = '0'
      let indicatorsContainer = checkIndicators(currentCarousel.carousel)
      if (indicatorsContainer) {
        setCurrentIndicator(indicatorsContainer, indicatorsContainer.children[currentCarousel.currentItem - 1])
      }
    } else if (currentCarousel.carousel && cursorPosition > event.pageX) {
      // checks if the current element is the last
      let isMaxItem = false
      if (currentCarousel.currentItem === parseInt(currentCarousel.carousel.dataset.maxItem)) {
        isMaxItem = true
      }
      let nextPosition = (isMaxItem ? currentCarousel.currentItem : currentCarousel.currentItem + 1) * currentCarousel.itemWidth
      let currentPosition = parseInt(currentCarousel.carousel.children[0].style.left.split('.')[0].match(/[0-9]/g).join(''))
      let currentCarouselTrack = currentCarousel.carousel.children[0]
      currentCarousel.carousel.dataset.currentItem = `${isMaxItem ? currentCarousel.currentItem : currentCarousel.currentItem + 1}`
      sliderAnimation(currentPosition, nextPosition, currentCarouselTrack, true)
      currentCarousel.track.style.zIndex = '0'
      let indicatorsContainer = checkIndicators(currentCarousel.carousel)
      if (indicatorsContainer) {
        setCurrentIndicator(indicatorsContainer, indicatorsContainer.children[isMaxItem ? currentCarousel.currentItem : currentCarousel.currentItem + 1])
      }
    }
  }
  clearVariables()
}

function clearVariables () {
  currentCarousel.carousel = null
  currentCarousel.track = 0
  cursorPosition = null
  currentCarousel.currentItem = null
  cursorMovePosition = 0
  cloningElement = false
}

// animates slide transition
function sliderAnimation(currentPosition, nextPosition, currentCarouselTrack, isLast) {
  let speed = 2
  if (!isAnimation[currentCarouselTrack.parentNode.id]) {
    isAnimation[currentCarouselTrack.parentNode.id] = true
    let timer = setInterval(() => {
      if (isLast) {
        if (nextPosition - currentPosition > 250) {
          currentPosition += 14
        } else if (nextPosition - currentPosition > 150) {
          currentPosition += 10
          speed = 6
        } else {
          speed = 8
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
          speed = 6
          currentPosition -= 10
        } else {
          speed = 8
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
    }, speed)

    function setPosition(position) {
      currentCarouselTrack.style.left = `-${position}px`
    }
  }
}

// changes attributes id of slider elements
function setItemsId(arrayOfItems) {
  for (let i = 0; i < arrayOfItems.length; i++) {
    arrayOfItems[i].dataset.id = `${i}`
  }
}

function setCurrentIndicator (allIndicators, target) {
  console.log(allIndicators, target)
  for (let i = 0; i < allIndicators.length; i++) {
    if (allIndicators[i].dataset.id !== target.dataset.id) {
      allIndicators[i].className = 'indicator'
    }
  }
  target.classList.add('active')
}

function checkIndicators (carousel) {
  let result = null
  for (let i = 0; i < carousel.children.length; i ++) {
    if (carousel.children[i].classList.contains('indicators-container')) {
      result = carousel.children[i]
    }
  }
  return result
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);