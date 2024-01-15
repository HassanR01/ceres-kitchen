// header Change
let header = document.querySelector('header')
window.addEventListener("scroll" , () => {
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#030303'
    }
    if (window.scrollY < 300) {
        header.style.backgroundColor = 'transparent'
    }
})

// Date in Copyright
let text = document.querySelector('.copyrightY')
let year = new Date().getFullYear()
text.innerHTML =+ year
