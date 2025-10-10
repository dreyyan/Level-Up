let submitBtn = document.querySelector('#submit-button');
let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let age = document.querySelector('#age');
let sexRadios = document.querySelectorAll('input[name="sex"]');
let maritalStatus = document.querySelector('#marital-status');
let email = document.querySelector('#email');
let password = document.querySelector('#password');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    // Check for empty fields
    if (
        firstName.value.trim() === "" ||
        lastName.value.trim() === "" ||
        age.value.trim() === "" ||
        ![...sexRadios].some(r => r.checked) || // Check if any radio is selected
        maritalStatus.value === "" ||
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {
        alert("ERROR: Please double check for blank inputs before submitting the form");
        return;
    }

    // Get selected sex value
    let sexValue = [...sexRadios].find(r => r.checked).value;

    // Display information in the console 
    console.log(`First Name: ${firstName.value}`);
    console.log(`Last Name: ${lastName.value}`);
    console.log(`Age: ${age.value}`);
    console.log(`Sex: ${sexValue}`);
    console.log(`Marital Status: ${maritalStatus.value}`);
    console.log(`Email: ${email.value}`);
    console.log(`Password: ${password.value}`);
});