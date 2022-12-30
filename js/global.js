document.querySelectorAll('.iconbutton').forEach(event => {
    event.addEventListener('click', el => {
        document.querySelector('.overlay').classList.toggle('active')
    })
})

