let form = document.querySelector('#form');
let addBtn = document.querySelector('#add-btn');
let submitBtn = document.querySelector('#submit-btn');

addBtn.addEventListener('click', function() {
    form.innerHTML += `<input type="text">`;
});

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default submission

    // Log all input values as an array
    console.log(texts);
});