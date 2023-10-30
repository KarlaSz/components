const btns = document.querySelectorAll('.btn')
const circle = document.querySelector('.circle')

const zoomCircle = e => {
  //pozycje w ktora klikamy
  const top = e.clientY
  const left = e.clientX

  //pozycja przycisku na naszej stronie
  const btnTopposition = e.target.offsetTop
  const btnLeftposition = e.target.offsetLeft

  //odejmowanie 2 zmiennych od siebie zeby uzyskac wartosc position absolut top i left
  const insideBtnTop = top - btnTopposition
  const insideBtnLeft = left - btnLeftposition

  const circle = document.createElement('span')
  circle.classList.add('circle')

  e.target.appendChild(circle)

  circle.style.top = insideBtnTop + 'px'
  circle.style.left = insideBtnLeft + 'px'
}

btns.forEach(btn => btn.addEventListener('click', zoomCircle))
