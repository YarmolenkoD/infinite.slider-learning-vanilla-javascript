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


function createCarousel (data) {
  let carousel = document.getElementById(data.carouselId)
  carousel.children[0].style.maxWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.minWidth = `${carousel.children[0].children.length * 100}%`
  carousel.children[0].style.left = `0`
  // for (let i = 0; i < carousel.children[0].children.length; i++) {
  //   carousel.children[0].children[i].style.width = '600px'
  // }
  Object(__WEBPACK_IMPORTED_MODULE_0__carouselFunctionality__["a" /* carouselTouchFunctionality */])(carousel)
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


window.onload = function() {
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-1'
    // arrow: true,
    // items: 1,
    // controls: true
  })
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-2'
    // arrow: true,
    // items: 2,
    // controls: true
  })
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-3'
    // arrow: true,
    // items: 1,
    // controls: true
  })
  Object(__WEBPACK_IMPORTED_MODULE_0__carousel__["a" /* createCarousel */])({
    carouselId: 'carousel-4'
    // arrow: true,
    // items: 3,
    // controls: true
  })
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = carouselTouchFunctionality;
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


function carouselTouchFunctionality (carousel) {
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

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);