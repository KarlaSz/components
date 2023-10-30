const btn = document.querySelector('.search-btn')
const input = document.querySelector('.search-input')

const showSearch = () => {
  input.classList.toggle('active')
}

btn.addEventListener('click', showSearch)
