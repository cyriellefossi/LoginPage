
//this function 

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}


function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

// this function allow to clean error message after it display

function classInputError(inputElement){
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "" ;
}


document.addEventListener("DOMContentLoaded" , () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click" , e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click" , e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    //this fonction allows us to display an error message if user has not completed the login form

    loginForm.addEventListener("submit" , e =>{
        e.preventDefault();

        // to set a error message

        setFormMessage(loginForm, "error" , "Invalid username/password combination");


    });

    //

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur" , e =>{
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Username must be at less 10 characters in length ");
            }
        });

        // to clear last error message
        inputElement.addEventListener("input" , e =>{
            clearInputError(inputElement);

        });

    });

   
});