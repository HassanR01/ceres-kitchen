const selectBtns = document.querySelectorAll('.partitionSelection ul li')
selectBtns.forEach(selectBtn => {
    selectBtn.addEventListener('click', () => {
        const allPartitions = document.querySelectorAll('.partitions .partition') 
        selectBtns.forEach(sb => {
            sb.classList.remove('selected')
        })
        allPartitions.forEach(partition => {
            partition.classList.remove('active')
        })
        selectBtn.classList.add('selected')
        document.getElementById(selectBtn.dataset.part).classList.add('active')
    })
})