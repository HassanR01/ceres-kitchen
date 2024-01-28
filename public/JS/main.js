// Date in Copyright
let text = document.querySelector('.copyrightY')
let year = new Date().getFullYear()
text.innerHTML =+ year




const burgerIcon = document.querySelector('.brgIcon')
burgerIcon.addEventListener('mouseover', () => {
    const menuHeader = document.querySelector('header .menu')
    menuHeader.classList.add('active')
})
burgerIcon.addEventListener('mouseout', () => {
    const menuHeader = document.querySelector('header .menu')
    menuHeader.classList.remove('active')
})

