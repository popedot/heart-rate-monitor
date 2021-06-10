const button = document.querySelector(".button")
const buttonMain = document.querySelector(".button_main")
const miniButtons = document.querySelectorAll(".button_mini")
const consultation = document.querySelector("#consultation")
const order = document.querySelector("#order")
const thanks = document.querySelector("#thanks")
const overlay = document.querySelector(".overlay")
const submitButtons = document.querySelectorAll(".button__submit")
const consultationButton = document.getElementById("consultation-button")
const orderButton = document.getElementById("order-button")
const orderForm = document.getElementById("order-form")
const consultationForm = document.getElementById("consultation-form")



function showModel(idOfModel, overlay) {
    overlay.style.display = "block"
    idOfModel.style.display = "block"  
    fadeOutEffect(overlay)
}

button.addEventListener("click", () => showModel(consultation, overlay))

buttonMain.addEventListener("click", () => showModel(consultation, overlay))

miniButtons.forEach((miniButton) => {
    miniButton.addEventListener("click", () => showModel(order, overlay))
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

function closeModal(modal, overlay) {
    modal.childNodes.forEach(modalNode => {
        if(modalNode.className == ("modal__close")) {
            modalNode.addEventListener("click", () => {
                fadeInEffect(overlay, modal)
            })
        }
    })
}

// checkForm(consultation)
checkForm(consultationButton, consultationForm, consultation)
checkForm(orderButton, orderForm, order)
closeModal(consultation, overlay)
closeModal(order, overlay)

function checkForm(button, form, modal) {
    let inputs = [], 
        labels = [], 
        emptyInputIndexes = [];
    const initialModalHeight =  parseInt(getComputedStyle(modal).height, 10)
        


      button.addEventListener("click", () => {

        toggleLabels(modal, initialModalHeight, emptyInputIndexes, labels, "none", true)

        
        inputs = []
        labels = [] 
        emptyInputIndexes = []

        form.childNodes.forEach(formNode => {
            if(formNode.nodeName == "INPUT") inputs.push(formNode)
            else if (formNode.nodeName == "LABEL") labels.push(formNode)
        })
        inputs.forEach((input, i) => {
            if (input.value == "") emptyInputIndexes.push(i) 
        })
        
        toggleLabels(modal, initialModalHeight, emptyInputIndexes, labels, "block") 
    }) 
}

function toggleLabels(modal, initialModalHeight, inputIndexes, labels, displayMode, rejectAddedHeight=false) {
    if(inputIndexes.length != 0) {
        let sumOfLabelsHeight = 0
        inputIndexes.forEach(i => {
            labels[i].style.display = `${displayMode}`
            const computedLabelHeight = parseInt(getComputedStyle(labels[i]).height, 10)
            sumOfLabelsHeight += isNaN(computedLabelHeight)? 0: (rejectAddedHeight == false? computedLabelHeight: -computedLabelHeight)
                 
        })
        modal.style.height = setModalHeight(modal, initialModalHeight, sumOfLabelsHeight)
    } 
}

function setModalHeight(modal, initialModalHeight, labelsHeight) {
    modal.style.height= `${initialModalHeight + 1.4*labelsHeight}px` //1.4 constant added. Pay attention.
} 

function fadeOutEffect(overlay) {
    const overlayEffect = setInterval(() => {
        if(overlay.style.opacity == "0" || !overlay.style.opacity)  {
            overlay.style.opacity = 1
        } 
        else clearInterval(overlayEffect)
    }, 200)
}

function fadeInEffect(overlay, modal) {
    const overlayEffect = setInterval(() => {
        const opacity = Number(getComputedStyle(overlay).opacity)
        console.log()
        if(overlay.style.opacity == "1")  {
            overlay.style.opacity = 0
        } 
        else {
            clearInterval(overlayEffect)
            modal.style.display = "none"
            overlay.style.display = "none"
        }
    }, 200)
    
}












