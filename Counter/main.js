const counterItems = document.querySelectorAll('.counter')
const counterBox = document.querySelector('.counter-box')

const options = {
  rootMargin: '-250px',
}

const startCounter = entry => {
  /*  console.log(entry[0].isIntersecting) */

  if (entry[0].isIntersecting) {
    counterItems.forEach(counter => {
      /* console.log(counter) */

      const updateCounder = () => {
        const finalNumber = counter.getAttribute('data-number')
        const value = parseInt(counter.textContent)

        const speed = finalNumber/400
      

        if (value < finalNumber) {
          counter.textContent = `${Math.floor(value + speed)}`
          setTimeout(updateCounder, 1)
        } else {
          counter.textContent = finalNumber
        }
      }
      updateCounder()
    })
  }
}

//towrzenie obserwatora
const observer = new IntersectionObserver(startCounter, options)
//mowimy nizej: obswerwer ten stworzony wyzej wez obserwuj nasz counterBox
observer.observe(counterBox)
