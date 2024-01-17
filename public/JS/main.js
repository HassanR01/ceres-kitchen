// Date in Copyright
let text = document.querySelector('.copyrightY')
let year = new Date().getFullYear()
text.innerHTML =+ year


const selectCtgs = document.querySelectorAll('.filters ul li')
selectCtgs.forEach(selectCtg => {
    selectCtg.addEventListener('mouseover', () => {
        const allItems = document.querySelectorAll('.items .item')
        selectCtgs.forEach(sc => {
            sc.classList.remove('selected')
        })
        allItems.forEach(item => {
            item.classList.remove('active')
        })
        selectCtg.classList.add('selected')
        console.log(selectCtg.dataset.category);
        document.querySelectorAll(`.items .${selectCtg.dataset.category}`).forEach(item => {
            item.classList.add('active')
        })
    })
})