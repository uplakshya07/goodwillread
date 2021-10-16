const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  )
}

const links = getElement('.nav-links')
const navBtnDOM = getElement('.nav-btn')
const menuIcon = getElement('.menu')

navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
  navBtnDOM.classList.toggle('change-btn')
  menuIcon.classList.toggle('fa-times')
})

const date = getElement('#date')
const currentYear = new Date().getFullYear()
date.textContent = currentYear
