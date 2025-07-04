// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // SIGNUP FUNCTIONALITY
    const signupForm = document.querySelector(".signup");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = signupForm.username.value.trim();
            const firstName = signupForm["First Name"].value.trim();
            const lastName = signupForm["Last Name"].value.trim();
            const email = signupForm.Email.value.trim();
            const password = signupForm.Password.value;
            const confirmPassword = signupForm["Confirm Password"].value;

            // Basic validation
            if (!username || !firstName || !lastName || !email || !password || !confirmPassword) {
                alert("Please fill in all the fields.");
                return;
            }

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
