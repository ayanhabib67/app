
let logEmail = document.getElementById("logEmail");
let logPassword = document.getElementById("logPassword");

function logIn(event) {
    event.preventDefault(); // Prevent form from refreshing

    if (logEmail.value === "smit@gmail.com" && logPassword.value === "saylani@12345") {
        window.location.href = "restaurant.html"; // Redirect to restaurant page
    } else {
        alert("Invalid email or password. Please try again.");
    }
}

