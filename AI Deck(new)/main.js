$(document).ready(function() {
     $('#containerSlider').slick({
         dots: true,
         infinite: true,
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
     });
 });
 
 document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.navbar').classList.add('visible');
    }, 500); // Delay for navbar animation

    setTimeout(() => {
        document.querySelector('.welcome-content').classList.add('visible');
        document.querySelector('.transparent-box').classList.add('visible');
    }, 1500); // Delay for welcome content and transparent box animation

    setTimeout(() => {
        document.querySelector('.slideshow').classList.add('visible');
    }, 2500); // Delay for slideshow animation
});

function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");
    
    errorMessage.innerHTML = ""; // Clear any previous error messages

    if (email === "") {
        errorMessage.innerHTML = "Please enter your email.";
        return false;
    }
    if (password === "") {
        errorMessage.innerHTML = "Please enter your password.";
        return false;
    }

    // If validation passes, you can proceed with form submission (e.g., via AJAX or form submit)
    // For now, just return true to simulate successful validation
    return true;
}

function validateRegisterForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
    var errorMessage = document.getElementById("error-message");

    errorMessage.innerHTML = ""; // Clear any previous error messages

    if (name === "") {
        errorMessage.innerHTML = "Please enter your name.";
        return false;
    }
    if (email === "") {
        errorMessage.innerHTML = "Please enter your email.";
        return false;
    }
    if (password === "") {
        errorMessage.innerHTML = "Please enter your password.";
        return false;
    }
    if (password.length < 8 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
        errorMessage.innerHTML = "Password must be at least 8 characters long and contain at least one number and one letter .";
        return false;
    }
    if (confirmPassword === "") {
        errorMessage.innerHTML = "Please confirm your password.";
        return false;
    }
    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match.";
        return false;
    }

    // If validation passes, you can proceed with form submission (e.g., via AJAX or form submit)
    // For now, just return true to simulate successful validation
    return true;
}