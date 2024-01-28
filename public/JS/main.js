// Date in Copyright
let text = document.querySelector('.copyrightY')
let year = new Date().getFullYear()
text.innerHTML =+ year


const selectCtgs = document.querySelectorAll('#itemsMenuHP .filters ul li')
selectCtgs.forEach(selectCtg => {
    selectCtg.addEventListener('click', () => {
        const allItems = document.querySelectorAll('.items .item')
        selectCtgs.forEach(sc => {
            sc.classList.remove('selected')
        })
        allItems.forEach(item => {
            item.classList.remove('active')
        })
        selectCtg.classList.add('selected')
        document.querySelectorAll(`.items .${selectCtg.dataset.category}`).forEach(item => {
            item.classList.add('active')
        })
    })
})

const burgerIcon = document.querySelector('.brgIcon')
burgerIcon.addEventListener('mouseover', () => {
    const menuHeader = document.querySelector('header .menu')
    menuHeader.classList.add('active')
})
burgerIcon.addEventListener('mouseout', () => {
    const menuHeader = document.querySelector('header .menu')
    menuHeader.classList.remove('active')
})

