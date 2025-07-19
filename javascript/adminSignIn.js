document.addEventListener("DOMContentLoaded", () => {
    const signinForm = document.querySelector(".signin");

    if (signinForm) {
        signinForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const username = signinForm.querySelector(".username").value.trim();
            const email = signinForm.querySelector(".Email").value.trim();
            const password = signinForm.querySelector(".Password").value;

            if (!username || !email || !password) {
                alert("Please enter all fields.");
                return;
            }

            const signinData = {
                username: username,
                email: email,
                password: password
            };

            try {
                const response = await fetch("../php/adminSignin.php", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(signinData)
                });

                const result = await response.json();

                alert(result.message); // show login result

                if (response.ok) {
                    // ✅ Redirect to admin page
                    window.location.href = "../html/admin.html";
                }

            } catch (error) {
                console.error("Login error:", error);
                alert("Login failed. Please try again.");
            }
        });
    }
});
