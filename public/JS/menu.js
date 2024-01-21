const selectBtns = document.querySelectorAll('.filters ul li')
selectBtns.forEach(selectCtg => {
    selectCtg.addEventListener('mouseover', () => {
        const Items = document.querySelectorAll('.items .item')
        selectBtns.forEach(sc => {
            sc.classList.remove('selected')
        })
        Items.forEach(item => {
            item.classList.remove('active')
        })
        selectCtg.classList.add('selected')
        document.querySelectorAll(`.items .${selectCtg.dataset.category}`).forEach(item => {
            item.classList.add('active')
        })
    })
})