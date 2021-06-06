const feedSection = document.querySelector('.feed')
const feedItems = document.querySelectorAll('.feed__item')
window.addEventListener('scroll', function() {
    if((this.pageYOffset + document.documentElement.clientHeight) >= feedSection.offsetTop) {
        feedItems.forEach((feedItem) => {
            if(this.pageYOffset + document.documentElement.clientHeight >= feedItem.offsetTop) {
                feedItem.classList.add("feed__item_active")
            }
        })    
    }
});

