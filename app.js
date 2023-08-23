const password = document.querySelector("#password")
const rePassword = document.querySelector("#re-password")
const submit = document.querySelector(".submit")
const error = document.querySelector(".error")

submit.addEventListener("click", ()=> {
    if (password.value !== rePassword.value) {
        error.classList.remove("hidden")
    }
    
})