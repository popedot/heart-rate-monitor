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

function showModel(idOfModel) {
    overlay.style.display = "block"
    idOfModel.style.display = "block"
    setTimeout(0.1)
    overlay.style.opacity = "100%" 
}

button.addEventListener("click", () => showModel(consultation))

buttonMain.addEventListener("click", () => showModel(consultation))

miniButtons.forEach((miniButton, i) => {
    miniButton.addEventListener("click", () => showModel(order))
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

function closeModal(modal) {
    modal.childNodes.forEach(modalNode => {
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

// checkForm(consultation)
checkForm(consultationButton, consultationForm, consultation)
checkForm(orderButton, orderForm, order)
closeModal(consultation)
closeModal(order)

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











