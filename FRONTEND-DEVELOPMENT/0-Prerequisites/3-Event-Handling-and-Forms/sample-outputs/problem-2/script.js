let username = document.querySelector('#username-input');
let submitBtn = document.querySelector('#submit-btn');
let errorMessage = document.querySelector('#error-message'); 

submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    // ERROR: Invalid username
    if (username.value.length < 3) {
        errorMessage.innerHTML = "ERROR: Username must be at least 3 characters long";
        return;
    }

    // Display if valid
    errorMessage.textContent = `Username: ${username.value}`;
});