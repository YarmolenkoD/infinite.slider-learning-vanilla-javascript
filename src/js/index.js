import { createCarousel } from './carousel'

//create sliders
window.onload = function() {
  createCarousel({
    carouselId: 'carousel-1',
    arrows: true,
    // indicators: true
  })
  createCarousel({
    carouselId: 'carousel-2',
    // arrows: true
    indicators: true
  })
  createCarousel({
    carouselId: 'carousel-3',
    arrows: true,
    indicators: true
  })
  createCarousel({
    carouselId: 'carousel-4',
    arrows: true
  })
}