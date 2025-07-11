 //Variable declaration
// const username = signupForm.username.value.trim();

//Getting data from html form to javascript
const firstName = document.querySelector(".firstName").value.trim();
const lastName = document.querySelector(".lastName").value.trim();
const email = document.querySelector(".Email").value.trim();
const password = document.querySelector(".password").value.trim();
const confirmPassword = document.querySelector(".confirmPassword").value.trim();

// const email = signupForm.Email.value.trim();
// const password = signupForm.Password.value;
// const confirmPassword = signupForm["Confirm Password"].value;

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // SIGNUP FUNCTIONALITY
    const signupForm = document.querySelector(".signup");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // //Variable declaration
            // const username = signupForm.username.value.trim();
            // const firstName = signupForm["First Name"].value.trim();
            // const lastName = signupForm["Last Name"].value.trim();
            // const email = signupForm.Email.value.trim();
            // const password = signupForm.Password.value;
            // const confirmPassword = signupForm["Confirm Password"].value;


            // Basic validation
            //Remember to add the other columns to above code
            // if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
            //     alert("Please fill in all the fields.");
            //     return;
            // }

            // Email format check (basic)
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            // Password match
            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }
            //Calling our Api here
            postCustomerInfor();
            // Simulate success
            alert(`Account created successfully!\nWelcome, ${firstName}!`);
            signupForm.reset();
        });
    }

    // SIGNIN FUNCTIONALITY
    const signinForm = document.querySelector(".signin");
    if (signinForm) {
        signinForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = signinForm.username.value.trim();
            const email = signinForm.Email.value.trim();
            const password = signinForm.Password.value;

            // Basic validation
            if (!username || !email || !password) {
                alert("Please enter all fields.");
                return;
            }

            // Simulate login success
            alert(`Welcome back, ${username}!`);
            signinForm.reset();
        });
    }
});

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

    // (Your existing signup and signin validation code can follow here)
    
});

//Api Connection for sending data to php file from javaScript above
async function postCustomerInfor(){
    const customerInformationObject = {
        firstNamePHP:firstName,
        lastNamePHP:lastName,
    };


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

    console.log(responseData);
}


