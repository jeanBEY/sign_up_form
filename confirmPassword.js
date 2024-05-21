const createButton = document.querySelector("button");
const passInput = document.querySelector(".form-row:nth-child(3)");
const passAlert = document.createElement("p");

createButton.addEventListener("click", (event) =>{
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm_password");

    if (password.value !== confirmPassword.value){
        event.preventDefault();

        passAlert.setAttribute("style", "color: red; font-size: 0.8rem;")
        passAlert.textContent = "*passwords do not match"

        password.setAttribute("style", "border: solid 1px red;")
        confirmPassword.setAttribute("style", "border: solid 1px red;")

        passInput.appendChild(passAlert)
    }
})
