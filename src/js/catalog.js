const catalogTabs = document.querySelectorAll(".catalog__tab")
const catalogItems = document.querySelectorAll(".catalog-item")
getPulseDivison("data-running")

catalogTabs.forEach((item, i) => {
    item.addEventListener("click", (e) => {
        const tab = e.target.nodeName == 'DIV'? e.target.offsetParent: e.target
            
        if (tab.classList.contains("catalog__tab_active")) {
            tab.classList.remove("catalog__tab_active")
            setColorDefault(tab, catalogTabs)
        } else {
            tab.classList.add("catalog__tab_active")
            setColorDefault(tab, catalogTabs)
        }

        switch(i) {
            case 0:
                getPulseDivison("data-running")
                break
            case 1:
                getPulseDivison("data-fitnes")
                break
            case 2:
               getPulseDivison("data-triathlon")
               break
        }
         
    })
})

function setColorDefault(passedButton, buttonArray) {
    buttonArray.forEach(button => {
        if(button.classList.contains("catalog__tab_active") && passedButton != button) {
            button.classList.remove("catalog__tab_active")
        }
    })
}

function getPulseDivison(attribute) {
    catalogItems.forEach(catalogItem => {
        if(catalogItem.hasAttribute(attribute)) catalogItem.style.display = "block";
        else catalogItem.style.display = "none";
    })
}