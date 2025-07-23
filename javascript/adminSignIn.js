
document.getElementById("signinForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("../php/signin.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });

        const result = await response.json();

        if (response.ok && result.message === "Login successful") {
            // Redirect to admin page (adjust the path as needed)
            window.location.href = "../admin/adminDashboard.html";
        } else {
            alert(result.message || "Sign-in failed.");
        }
    } catch (error) {
        alert("An error occurred during sign-in.");
        console.error(error);
    }
});

