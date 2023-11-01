const scrollBtn = document.querySelector('.scroll-to-top')
//do sterowania zmiennymi css --scroll-width
let root = document.documentElement

const handleScroll = () => {
  //jak daleko zjechalismy scrollem
  const scroll = window.scrollY

  //wysokosc strony , a drugie to wysokosc ekranu
  const LeftToScroll =
    document.body.getBoundingClientRect().height - window.innerHeight
  /* console.log(`wysokosc strony : ${document.body.getBoundingClientRect().height} oraz wysokosc vieportu ${window.innerHeight}`); */
  /*  console.log(LeftToScroll) */

  const scrollBarWidth = Math.floor((scroll / LeftToScroll) * 100)
  /*  console.log(scrollBarWidth) */

  root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

  //procent przejechania strony cyzli na 50%
  if (scrollBarWidth > 50) {
    scrollBtn.classList.add('active')
  } else {
    scrollBtn.classList.remove('active')
  }
}

const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

window.addEventListener('scroll', handleScroll)
scrollBtn.addEventListener('click',scrollToTop)