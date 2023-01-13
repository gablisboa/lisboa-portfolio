document.querySelectorAll('.iconbutton').forEach(event => {
    event.addEventListener('click', el => {
        document.querySelector('.overlay').classList.toggle('active')
    })
})

const chipCarousel = new Swiper('.chips-group.swiper', {
    loop: true,
    speed: 5000,
    autoplay: {
        delay: 1
    },
    allowTouchMove: false,
    slidesPerView: 'auto',
    spaceBetween: 24,
})

document.querySelectorAll('a[href^="#"]').forEach(element => {
    element.addEventListener('click', event => {
        document.querySelector('.overlay').classList.remove('active')
    })
})