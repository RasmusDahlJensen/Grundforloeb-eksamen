//Jeg deklarer mine variabler med et regex som skal bruges til validering - 
//mere specifikt med en const fordi værdien skal være konstant og ikke skal ændres

const nameRegex = /^[\p{L} ,.'-]+$/u
const phoneRegex = /^\s*\+?\s*([0-9][\s-]*){8,}$/
const emailRegex = /^[a-zA-Z0-9_.+]*[a-zA-Z][a-zA-Z0-9_.+]*@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/


//Jeg indhenter mine inputs og definere mine variabler med dem
let fullname = document.getElementById("fullname")
let email = document.getElementById("email")
let phone = document.getElementById("phone")
//Og min knap også
let submitBtn = document.getElementById("btnSubmit")

//Når jeg trykker på min send knap så kalder jeg funktionen med et klik
submitBtn.addEventListener("click", function(){
    //Navn
    if (!fullname.value.match(nameRegex)) {
        showError(fullname)
    }
    
    //Email
    if (!email.value.match(emailRegex)) {
        showError(email)
    }

    //Phone
    if (!phone.value.match(phoneRegex)) {
        showError(phone)
    }
})



//Her laver jeg en funktion som vil indsætte en error border og baggrund
//Hvis den bliver kaldet
function showError(error){
    error.classList.add('border-error') //Her tilføjer jeg en class som giver en rød border
        error.addEventListener("keypress", function(){
            error.classList.remove('border-error') //Når jeg ændrer i mit input felt med et keypress så  vil den fjerne fejlen
})
}

function showSuccess(success){
    success.classList.add('border-success')
    success.addEventListener("keypress", function(){
        success.classList.remove('border-success')
    })
}