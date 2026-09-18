const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (document.getElementById("signupForm")) {

        const inputs = form.querySelectorAll("input");

        const name = inputs[0].value;
        const email = inputs[1].value;
        const password = inputs[2].value;
        const confirmPassword = inputs[3].value;

        if (name === "" || email === "" || password === "" || confirmPassword === "") {
            alert("Please fill all fields!");
        } 
        else if (password !== confirmPassword) {
            alert("Passwords do not match!");
        } 
        else {
            alert("Account Created Successfully!");
            window.location.href = "index.html";
        }

    } else {

        const email = document.querySelector('input[type="email"]').value;
        const password = document.querySelector('input[type="password"]').value;

        if (email === "student@gmail.com" && password === "12345") {
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password!");
        }
    }
});