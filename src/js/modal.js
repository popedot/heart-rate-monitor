const button = document.querySelector(".button")
const miniButtons = document.querySelectorAll(".button_mini")
const consultation = document.querySelector("#consultation")
const order = document.querySelector("#order")
const thanks = document.querySelector("#thanks")
const overlay = document.querySelector(".overlay")
const closeX = document.querySelector(".modal__close")
const submitButtons = document.querySelectorAll(".button__submit")

function turnModel(idOfModel) {
    overlay.style.display = "block"
    idOfModel.style.display = "block"
    setTimeout(0.1)
    overlay.style.opacity = "100%" 
}

button.addEventListener("click", () => turnModel(consultation))



miniButtons.forEach((miniButton, i) => {
    miniButton.addEventListener("click", () => turnModel(order))
})

function hideAllLabels(modal) {
    if (e.originalTarget.nodeName == "BUTTON") {
        e.target.classList.forEach(clazz => {
            if(clazz == "button_submit") {
                form = undefined
                modal.childNodes.forEach(node => {
                   if(node.nodeName == "FORM") {
                       form = node
                   }
                })

                inputs = []
                labels = []
                form.childNodes.forEach(formNode => {
                    if(formNode.nodeName == "INPUT") inputs.push(formNode)
                    else if(formNode.nodeName == "LABEL") labels.push(formNode)
                })

                inputs.forEach((input, i) => {
                    if(input.value == "") {
                        labels[i].style.display = "block"
                        modal.style.height = `${parseInt(getComputedStyle(modal).height, 10) + parseInt(getComputedStyle(labels[i]).height, 10)}px`;
                    }
                })
            }
        })  
    }    
}

function checkStandartForm(modal) {
    const modalInitailHeight = parseInt(getComputedStyle(modal).height, 10)
    let labelsView = []
    modal.addEventListener("click", (e) => {
        if (e.originalTarget.nodeName == "BUTTON") {
            labelsView = []  
            modal.style.height = `${modalInitailHeight}px`;
            e.target.classList.forEach(clazz => {
                if(clazz == "button_submit") {
                    form = undefined
                    modal.childNodes.forEach(node => {
                       if(node.nodeName == "FORM") {
                           form = node
                       }
                    })

                    

                    inputs = []
                    labels = []
                    form.childNodes.forEach(formNode => {
                        if(formNode.nodeName == "INPUT") inputs.push(formNode)
                        else if(formNode.nodeName == "LABEL") {
                            formNode.style.display = "none"
                            labels.push(formNode) 
                        }
                    })

                    
                    inputs.forEach((input, i) => {
                        if(input.value == "")  labelsView.push(labels[i])
                    })
                    labelsView.forEach(labelView => {
                        labelView.style.display = "block"
                    })
                    
                    const labelHeight = parseInt(getComputedStyle(labelsView[0]).height, 10) ?? null
                    modal.style.height = `${modalInitailHeight + labelsView.length*2*labelHeight}px`;
                }
            })  
        }    
    })
}

function closeModal(modal) {
    modal.childNodes.forEach(modalNode => {
        console.log(modalNode)
        if(modalNode.className == ("modal__close")) {
            modalNode.addEventListener("click", () => {
                modal.style.display = "none"
                modal.style.display = "none" 
                modal.style.display = "none" 
                overlay.style.opacity = "0"
                setTimeout(0.5)
                overlay.style.display = "none" 
            })
        }
    })
}

checkStandartForm(consultation)
checkStandartForm(order)
closeModal(consultation)
closeModal(order)






