// script.js

document.addEventListener("DOMContentLoaded", function() {
    const accountLink = document.querySelector('a[href="#account"]');
    const registerLink = document.querySelector('a[href="#register"]');
    const accountSection = document.getElementById("account");
    const registerSection = document.getElementById("register");

    // Hide registration section initially
    registerSection.style.display = "none";

    accountLink.addEventListener("click", function(event) {
        event.preventDefault();
        accountSection.style.display = "block";
        registerSection.style.display = "none";
    });

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        accountSection.style.display = "none";
        registerSection.style.display = "block";
    });
});

