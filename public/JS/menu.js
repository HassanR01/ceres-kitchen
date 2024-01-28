const selectfilter = document.querySelectorAll('#itemsMenu .filters ul li')
selectfilter.forEach(selectCtg => {
    selectCtg.addEventListener('mouseover', () => {
        const Items = document.querySelectorAll('.items .item')
        selectfilter.forEach(sc => {
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