//  //Variable declaration
//     // const firstName = document.querySelector(".firstName").value.trim();
//     // console.log(firstName);
//     // const lastName = document.querySelector(".lastName").value.trim();
//     // const email = document.querySelector(".Email").value.trim();
//     // const password = document.querySelector(".password").value.trim();
//     // const confirmPassword = document.querySelector(".confirmPassword").value.trim();

// const btnSigninBtn = document.querySelector(".sign_in_btn");

// function handleCustomerInformation(event){
//     event.preventDefault();
//     //Calling our Api here
//     postCustomerInfor();
//     // console.log("hello");
// }

// // btnSigninBtn.addEventListener("click",handleCustomerInformation);


// //Getting data from html form to javascript


// // const email = signupForm.Email.value.trim();
// // const password = signupForm.Password.value;
// // const confirmPassword = signupForm["Confirm Password"].value;

// // Wait until the DOM is fully loaded
// // document.addEventListener("DOMContentLoaded", () => {
// //     // SIGNUP FUNCTIONALITY
// //     const signupForm = document.querySelector(".signup");
// //     if (signupForm) {
// //         signupForm.addEventListener("submit", function (e) {
// //             e.preventDefault();

// //             // //Variable declaration
// //             // const username = signupForm.username.value.trim();
// //             // const firstName = signupForm["First Name"].value.trim();
// //             // const lastName = signupForm["Last Name"].value.trim();
// //             // const email = signupForm.Email.value.trim();
// //             // const password = signupForm.Password.value;
// //             // const confirmPassword = signupForm["Confirm Password"].value;


// //             // Basic validation
// //             //Remember to add the other columns to above code
// //             // if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
// //             //     alert("Please fill in all the fields.");
// //             //     return;
// //             // }

// //             // Email format check (basic)
// //             //uncomment this code
// //             // const emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
// //             // if (!emailPattern.test(email)) {
// //             //     alert("Please enter a valid email address.");
// //             //     return;
// //             // }

// //             // Password match
// //             if (password !== confirmPassword) {
// //                 alert("Passwords do not match.");
// //                 return;
// //             }
// //             // //Calling our Api here
// //             // postCustomerInfor();
// //             // Simulate success
// //             alert(`Account created successfully!\nWelcome, ${firstName}!`);
// //             signupForm.reset();
// //         });
// //     }

// //     // SIGNIN FUNCTIONALITY
// //     const signinForm = document.querySelector(".signin");
// //     if (signinForm) {
// //         signinForm.addEventListener("submit", function (e) {
// //             e.preventDefault();

// //             const username = signinForm.username.value.trim();
// //             const email = signinForm.Email.value.trim();
// //             const password = signinForm.Password.value;

// //             // Basic validation
// //             if (!username || !email || !password) {
// //                 alert("Please enter all fields.");
// //                 return;
// //             }

// //             // Simulate login success
// //             alert(`Welcome back, ${username}!`);
// //             signinForm.reset();
// //         });
// //     }
// // });

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
//     const firstName = document.querySelector(".firstName").value.trim();
//     // console.log(firstName);
//     const lastName = document.querySelector(".lastName").value.trim();
//     const email = document.querySelector(".Email").value.trim();
//     const password = document.querySelector(".password").value.trim();
//     const confirmPassword = document.querySelector(".confirmPassword").value.trim();

//     const customerInformationObject = {
//         firstNamePHP:firstName,
//         lastNamePHP:lastName,
//     };

//     console.log(customerInformationObject);

// //     document.addEventListener("DOMContentLoaded", () => {
// //     const toggleIcons = document.querySelectorAll(".toggle-password");

// //     toggleIcons.forEach(icon => {
// //         icon.addEventListener("click", () => {
// //             const inputSelector = icon.getAttribute("toggle");
// //             const passwordInput = document.querySelector(inputSelector);

// //             if (passwordInput) {
// //                 const type = passwordInput.type === "password" ? "text" : "password";
// //                 passwordInput.type = type;

// //                 // Toggle icon class
// //                 icon.classList.toggle("fa-eye");
// //                 icon.classList.toggle("fa-eye-slash");
// //             }
// //         });
// //     });
// // });


//     // console.log(customerInformationObject);


//     const urlCustomerLink = "../php/adminAccount.php";
    
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
//     window.location.href ="../html/adminSignIn.html";
// }


// btnSigninBtn.addEventListener("click",handleCustomerInformation);

document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.querySelector(".signup");

    if (signupForm) {
        signupForm.addEventListener("submit", async function (e) {
            e.preventDefault();

            const firstName = document.querySelector(".firstName").value.trim();
            const lastName = document.querySelector(".lastName").value.trim();
            const email = document.querySelector(".Email").value.trim();
            const password = document.querySelector(".password").value.trim();
            const confirmPassword = document.querySelector(".confirmPassword").value.trim();

            if (!firstName || !lastName || !email || !password || !confirmPassword) {
                alert("Please fill in all fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("Passwords do not match.");
                return;
            }

            const customerInformationObject = {
                firstNamePHP: firstName,
                lastNamePHP: lastName,
                emailPHP: email,
                passwordPHP: password,
                action: "signup"
            };

            try {
                const response = await fetch("../php/adminAccount.php", {
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
                    window.location.href = "../html/adminSignIn.html";
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
