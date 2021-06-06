const btnsDetail = document.querySelectorAll(".catalog-item__link")
const btnsBack = document.querySelectorAll(".catalog-item__back")
const tracks = document.querySelectorAll(".catalog-item__track")
const windowWidth = document.querySelector(".catalog-item__window").offsetWidth 

btnsDetail.forEach((btnDetail, i) => {
    btnDetail.addEventListener("click", e => {
        tracks.forEach((track, j) => {
            if(i == j) {
                track.style.transform = `translate(-${windowWidth}px)`
            }
        })
    })
})

btnsBack.forEach((btnBack, i) => {
    btnBack.addEventListener("click", e => {
        tracks.forEach((track, j) => {
            if(i == j) {
                track.style.transform = `translate(0)`
            }
        })
    })
})
