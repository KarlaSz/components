const sliderBox = document.querySelector('.slider-box')
const leftBtn = document.querySelector('.btn-left')
const rightBtn = document.querySelector('.btn-right')
const carouselImg = document.querySelectorAll('.slider-img')

//wartosc odpowiada szerokosci slider z css
const carouselWidth = 800

//w mili sekundach czyli 3 min
const carouselSpeed = 3000

let index = 0

const handleCarousel = () => {
  index++
  changeImg()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImg = () => {
  if (index > carouselImg.length - 1) {
    index = 0
  } else if (index < 0) {
    index = carouselImg.length - 1
  }

  //odejmuje pozycje obrazke czyli index pomnozone przez szerokosc slider, bo obrazki sa w poziomie dziekie display flex
  sliderBox.style.transform = `translateX(${-index * carouselWidth}px)`
}

const handleRightArrow = () => {
  index++
  resetInterval()
}
const handleLefttArrow = () => {
  index--
  resetInterval()
}

const resetInterval = params => {
  changeImg()
  clearInterval(startCarousel)
  startCarousel = setInterval(handleCarousel, carouselSpeed)
}

rightBtn.addEventListener('click', handleRightArrow)
leftBtn.addEventListener('click', handleLefttArrow)
