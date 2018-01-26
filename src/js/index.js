import { createCarousel } from './carousel'

//create sliders
window.onload = function() {
  createCarousel({
    carouselId: 'carousel-1',
    // arrows: true
  })
  createCarousel({
    carouselId: 'carousel-2',
    // arrows: true
  })
  createCarousel({
    carouselId: 'carousel-3',
    arrows: true
  })
  createCarousel({
    carouselId: 'carousel-4',
    arrows: true
  })
}