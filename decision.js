document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.querySelector(".login_btn");
    const regBtn = document.querySelector(".reg_btn");
    const loginForm = document.getElementById("loginForm");
    const regForm = document.getElementById("registerForm");

    loginForm.style.display = "none";
    regForm.style.display = "none";

    loginBtn.addEventListener("click", function() {
        regForm.style.display = "none";
        loginForm.style.display = "block";
    });

    regBtn.addEventListener("click", function() {
        loginForm.style.display = "none";
        regForm.style.display = "block";
    });

    // Handle register form submission via AJAX
    regForm.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent the default form submission

        const formData = new FormData(regForm);

        fetch('/register', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Redirect to home page after successful registration
                window.location.href = '/home.html';  // Redirect to home page
            } else {
                alert('Registration failed! Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });

    // Handle login form submission
    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevent the default form submission

        const formData = new FormData(loginForm);

        fetch('/login', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                window.location.href = '/final.html';  // Redirect to home page after successful login
            } else {
                alert('Login failed! Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        });
    });
});