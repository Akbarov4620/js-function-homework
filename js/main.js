var elForm = document.querySelector("#form")
var elInput = document.querySelector("#value")
var elSelect = document.querySelector("#select")
var elHeading = document.querySelector("#heading")
var tashkent = 3000000
var russia = 5000000
var dubai = 10000000
var barchasi = tashkent + russia + dubai

elForm.addEventListener("submit" , function (evt) {
    evt.preventDefault()
    if(elSelect.value === "tashkent" && elInput.value >= tashkent){
        elHeading.textContent = "Yetadi"
    }

    else if (elSelect.value === "russia" && elInput.value >= russia){
        elHeading.textContent = "Yetadi"
    }

    else if (elSelect.value === "dubai" && elInput.value >= dubai){
        elHeading.textContent = "Yetadi"
    }
    else{
        elHeading.textContent = "Yetmaydi"
    }
})
