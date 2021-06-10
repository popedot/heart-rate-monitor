const feedSection = document.querySelector(".feed")
const catalogSection = document.querySelector(".catalog")
const arrowUp = document.querySelector(".arrowup")
const goToCatalog = document.querySelector(".promo__link")

window.addEventListener("scroll", () => {
    const scrolledHeight = document.documentElement.clientHeight + pageYOffset
    if(scrolledHeight >= feedSection.offsetTop) {
        arrowUp.classList.remove("arrowup_hidden")
    } else  {
        arrowUp.classList.add("arrowup_hidden")
    }
}) 

arrowUp.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
})


goToCatalog.addEventListener("click", () => {
    window.scrollTo({top: catalogSection.offsetTop , behavior: 'smooth'})
})