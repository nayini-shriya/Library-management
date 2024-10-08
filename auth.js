document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const adminLoginForm = document.getElementById("adminLoginForm");
    const signUpForm = document.getElementById("signUpForm");
    const showSignUp = document.getElementById("showSignUp");

    // Mock admin credentials (for development purposes)
    const adminCredentials = {
        username: "admin",
        password: "admin123" // Change these credentials as needed
    };

    // Function to switch between login and signup forms
    showSignUp.addEventListener("click", () => {
        signUpForm.style.display = "block";
        loginForm.style.display = "none";
    });

    // User login functionality
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("loginUsername").value;
        const password = document.getElementById("loginPassword").value;

        // Check stored user data
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!"); // Optional alert
            window.location.href = "dashboard.html"; // Redirect to user dashboard
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });

    // Admin login functionality
    adminLoginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("adminUsername").value;
        const password = document.getElementById("adminPassword").value;

        // Validate admin credentials
        if (username === adminCredentials.username && password === adminCredentials.password) {
            // Redirect to admin dashboard
            window.location.href = "admin_dashboard.html"; // Change this to your admin dashboard page
        } else {
            alert("Invalid admin username or password. Please try again.");
        }
    });

    // Sign up form functionality
    signUpForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("signupUsername").value;
        const password = document.getElementById("signupPassword").value;
        const email = document.getElementById("signupEmail").value; // Add email for registration

        // Validate email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Check if username already exists
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const userExists = users.find(user => user.username === username);

        if (userExists) {
            alert("Username already exists. Please choose a different username.");
        } else {
            // Add new user to local storage
            users.push({ username, password, email }); // Save email along with username and password
            localStorage.setItem("users", JSON.stringify(users));
            alert("Sign up successful! You can now log in.");
            signUpForm.reset(); // Clear the signup form
            signUpForm.style.display = "none"; // Hide signup form
            loginForm.style.display = "block"; // Show login form
        }
    });
});
