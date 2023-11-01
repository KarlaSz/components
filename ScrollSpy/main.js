const menuItems = document.querySelectorAll('a')
const scrollSpySection = document.querySelectorAll('.section')
const lastA = document.querySelector('a:last-of-type')

const handleScrollSpy = () => {
  if (document.body.classList.contains('main-page')) {
    const sections = []

    scrollSpySection.forEach(section => {
      //jak daleko zjechalismy scrolem nasz strona
      /* console.log(window.scrollY)
      //odleglosc od gornej krawedzi przegladarki
      console.log(section.offsetTop)
      //wysokosci sekcji
      console.log(section.offsetHeight) */

      if (window.scrollY <= section.offsetTop + section.offsetHeight - 109.5) {
        sections.push(section)

        const activeSection = document.querySelector(
          //czy atrybut zawieraja jakas wartosc
          `[href*="${sections[0].id}"]`
        )

        menuItems.forEach(item => item.classList.remove('active'))

        activeSection.classList.add('active')
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 20
      ) {
        menuItems.forEach(item => item.classList.remove('active'))

        lastA.classList.add('active')

        //wysokosc ekranu przegladarki
        console.log(window.innerHeight)
      }
    })
  }
}

window.addEventListener('scroll', handleScrollSpy)
