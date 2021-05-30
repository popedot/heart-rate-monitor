let position = 0
const slidesToScroll = 1
const carouselWindow = document.querySelector(".carousel__wrapper")
const track = document.querySelector(".carousel__track")
const btnPrev = document.querySelector(".carousel__prev")
const btnNext = document.querySelector(".carousel__next")
const btn = document.querySelector(".button_submit")
const items = document.querySelectorAll(".carousel__item")
const itemsCount = items.length
const itemWidth = track.offsetWidth 
const trackLength = itemWidth * (itemsCount-1)

const setPosition = () => {
    track.style.transform = `translateX(${position}px)`
}

btnNext.addEventListener("click", (e) => {
    position += position <= -trackLength? trackLength: -itemWidth

    setPosition()
})

btnPrev.addEventListener("click", (e) => {
    position += position == 0 && position >= -trackLength? -trackLength: itemWidth

    setPosition()
})




