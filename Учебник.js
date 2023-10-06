'use strict';

let savedNumbers = new Map();

const inputs = document.querySelectorAll(".number-input");

// Функция, вызываемая при нажатии Enter
function handleEnter(event) {
    if (event.key === "Enter") {
        let value = parseFloat(event.target.value);
        if (!isNaN(value)) {
            if (!savedNumbers.has(event.target)) {
                savedNumbers.set(event.target, []);
            }
            savedNumbers.get(event.target).push(value);
            event.target.value = '';
        }
    }
}

// Функция, вызываемая при потере фокуса
function handleBlur() {
    console.log(savedNumbers);
}

inputs.forEach(input => {
    input.addEventListener("keydown", handleEnter);
    input.addEventListener("blur", handleBlur);
});

