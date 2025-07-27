
// const btnSigninpBtn = document.querySelector(".sign_in_btn");

// function handleCustomerInformation(event){
//     event.preventDefault();
//     //Calling our Api here
//     postCustomerInfor();
//     // console.log("hello");
// }


// document.addEventListener("DOMContentLoaded", () => {
//     // Toggle password visibility
//     const toggleIcons = document.querySelectorAll(".toggle-password");

//     toggleIcons.forEach(icon => {
//         icon.addEventListener("click", () => {
//             const inputSelector = icon.getAttribute("toggle");
//             const passwordInput = document.querySelector(inputSelector);

//             if (passwordInput) {
//                 const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
//                 passwordInput.setAttribute("type", type);

//                 icon.classList.toggle("fa-eye");
//                 icon.classList.toggle("fa-eye-slash");
//             }
//         });
//     });

//     // 
    
// });

// //Api Connection for sending data to php file from javaScript above
// async function postCustomerInfor(){
//      //Variable declaration
//     const username = document.querySelector(".username").value.trim();
//     const firstName = document.querySelector(".firstName").value.trim();
//     // console.log(firstName);
//     const lastName = document.querySelector(".lastName").value.trim();
//     const email = document.querySelector(".Email").value.trim();
//     const password = document.querySelector(".password").value.trim();
//     const confirmPassword = document.querySelector(".confirmPassword").value.trim();

//     const customerInformationObject = {
//         usernamePHP:username,
//         firstNamePHP:firstName,
//         lastNamePHP:lastName,
//         emailPHP:email,
//         passwordPHP:password,
//         confirmPasswordPHP:confirmPassword

//     };

//     console.log(customerInformationObject);



//     const urlCustomerLink = "../php/CreateAccount.php";
    
//     //Gets the fetch api response
//     const response = await fetch(urlCustomerLink,{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(customerInformationObject)
//     });

//     const responseData = await response.json();
//     // console.log(responseData);
//     for(let key in responseData){
//         alert(responseData[key]);
//     }
//     window.location.href ="../html/signIn.html";
// }


// btnSigninBtn.addEventListener("click",handleCustomerInformation);


document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup");

    if (signupForm) {
        signupForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const username = document.querySelector(".username").value.trim();
            const firstName = document.querySelector(".firstName").value.trim();
            const lastName = document.querySelector(".lastName").value.trim();
            const email = document.querySelector(".Email").value.trim();
            const password = document.querySelector(".password").value.trim();
            const confirmPassword = document.querySelector(".confirmPassword").value.trim();

            if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            const customerInformationObject = {
                usernamePHP: username,
                firstNamePHP: firstName,
                lastNamePHP: lastName,
                emailPHP: email,
                passwordPHP: password,
                action: "signup"
            };

            try {
                const response = await fetch("../php/CreateAccount.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(customerInformationObject)
                });

                const responseData = await response.json();
                alert(responseData.message || "Signup successful");

                if (response.ok) {
                    // Redirect only on success
                    window.location.href = "../html/SignIn.html";
                }
            } catch (error) {
                console.error("Signup failed:", error);
                alert("Something went wrong while signing up.");
            }
        });
    }

    // Password toggle handler (already correct)
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
});
