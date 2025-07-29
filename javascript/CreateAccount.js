
const btnSignupBtn = document.querySelector(".sign_up_btn");

function handleCustomerInformation(event){
    event.preventDefault();
    //Calling our Api here
    postCustomerInfor();
    // console.log("hello");
}


document.addEventListener("DOMContentLoaded", () => {
    // Toggle password visibility
    const toggleIcons = document.querySelectorAll(".toggle-password");

    toggleIcons.forEach(icon => {
        icon.addEventListener("click", () => {
            const inputSelector = icon.getAttribute("toggle");
            const passwordInput = document.querySelector(inputSelector);

            if (passwordInput) {
                const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
                passwordInput.setAttribute("type", type);

                icon.classList.toggle("fa-eye");
                icon.classList.toggle("fa-eye-slash");
            }
        });
    });

    // 
    
});

//Api Connection for sending data to php file from javaScript above
async function postCustomerInfor(){
     //Variable declaration
    const username = (document.querySelector(".username").value).trim();
    const firstName = (document.querySelector(".firstName").value).trim();
    // console.log(firstName);
    const lastName = (document.querySelector(".lastName").value).trim();
    const email = (document.querySelector(".Email").value).trim();
    const password = (document.querySelector(".password").value).trim();
    const confirmPassword = (document.querySelector(".confirmPassword").value).trim();

    const customerInformationObject = {
        usernamePHP:username,
        firstNamePHP:firstName,
        lastNamePHP:lastName,
        emailPHP:email,
        passwordPHP:password,
        confirmPasswordPHP:confirmPassword

    };

    console.log(customerInformationObject);



    const urlCustomerLink = "../php/CreateAccount.php";
    
    //Gets the fetch api response
    const response = await fetch(urlCustomerLink,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(customerInformationObject)
    });

    const responseData = await response.json();
    // console.log(responseData);
    for(let key in responseData){
        alert(responseData[key]);
    }
    window.location.href ="../html/signIn.html";
}


btnSignupBtn.addEventListener("click",handleCustomerInformation);


