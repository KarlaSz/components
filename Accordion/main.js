const accordion = document.querySelector('.accordion')
const accordionBtns = document.querySelectorAll('.accordion-btn')
const txt = document.querySelector('.accordion-info')

function openAccordionItems() {
  if (this.nextElementSibling.classList.contains('active')) {
    this.nextElementSibling.classList.remove('active')
  } else {
    closeAccordionItems()
    this.nextElementSibling.classList.toggle('active')
  }
}

const closeAccordionItems = () => {
  const allActiveItems = document.querySelectorAll('.accordion-info')
  allActiveItems.forEach(item => item.classList.remove('active'))
}

const clickOutsideAccordion = e => {
  if (
    e.target.classList.contains('accordion-btn') ||
    e.target.classList.contains('accordion-info') ||
    e.target.classList.contains('accordion-info-text')
  ) {
    return
  }
  closeAccordionItems()
}

//dajemy foreach bo buttony sa elem. liniowymi, nie blokowymi i na nich zwykle listenery nie dzialaja
accordionBtns.forEach(btn => btn.addEventListener('click', openAccordionItems))
window.addEventListener('click', clickOutsideAccordion)
