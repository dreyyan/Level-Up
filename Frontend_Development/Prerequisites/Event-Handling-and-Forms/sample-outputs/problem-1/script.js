let incrementButton = document.querySelector('#increment-button');
let decrementButton = document.querySelector('#decrement-button');
let count = document.querySelector('#count');

document.addEventListener('DOMContentLoaded', function() {
    incrementButton.addEventListener('click', function() {
        count.textContent = Number(count.textContent) + 1;
    });

    decrementButton.addEventListener('click', function() {
        count.textContent = Number(count.textContent) - 1;
    });
});