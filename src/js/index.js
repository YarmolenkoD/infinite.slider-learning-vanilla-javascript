import { createCarousel } from './carousel'

window.onload = function() {
  createCarousel({
    carouselId: 'carousel-1'
    // arrow: true,
    // items: 1,
    // controls: true
  })
  createCarousel({
    carouselId: 'carousel-2'
    // arrow: true,
    // items: 2,
    // controls: true
  })
  createCarousel({
    carouselId: 'carousel-3'
    // arrow: true,
    // items: 1,
    // controls: true
  })
  createCarousel({
    carouselId: 'carousel-4'
    // arrow: true,
    // items: 3,
    // controls: true
  })
}