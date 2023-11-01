const img = document.querySelector('img')

const zoomImg = e => {
  //wskazuja pozycje kursora w przegladarce
  const x = e.clientX
  const y = e.clientY
  /*  console.log(x, y) */

  //pozycja obrazka
  const imgX = img.offsetLeft
  const imgY = img.offsetTop

  //wskazuja pozycje kursora wew. obrazka
  const newX = (imgX - x) * -1
  const newY = (imgY - y) * -1
  /*  console.log(newX, newY) */

  //pozycja skad animowany jest element
  img.style.transformOrigin = `${newX}px ${newY}px`
  img.classList.add('zoom-img')
}

const resetImg = () => {
  img.classList.remove('zoom-img')
}

img.addEventListener('mousemove', zoomImg)
img.addEventListener('mouseout', resetImg)
