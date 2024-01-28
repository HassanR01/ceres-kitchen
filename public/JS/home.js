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