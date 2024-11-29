// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Select the form and input fields
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');

    // Add a submit event listener to the form
    form.addEventListener('submit', (event) => {
        let isValid = true; // Flag to track form validity

        // Validate Name
        if (nameInput.value.trim() === '') {
            showError(nameInput, "Name is required.");
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Validate Email
        const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
        if (!emailPattern.test(emailInput.value)) {
            showError(emailInput, "Please enter a valid email address.");
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Validate Phone
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phoneInput.value)) {
            showError(phoneInput, "Please enter a valid 10-digit phone number.");
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        // Validate Message
        if (messageInput.value.trim() === '') {
            showError(messageInput, "Message cannot be empty.");
            isValid = false;
        } else {
            clearError(messageInput);
        }

        // Prevent form submission if any field is invalid
        if (!isValid) {
            event.preventDefault();
        }
    });

    // Function to show an error message
    function showError(input, message) {
        const parent = input.parentElement; // Get the parent element
        let error = parent.querySelector('.error-message'); // Check if an error message already exists

        // If not, create a new one
        if (!error) {
            error = document.createElement('small');
            error.classList.add('error-message');
            error.style.color = 'red';
            parent.appendChild(error);
        }

        // Set the error message
        error.textContent = message;
    }

    // Function to clear an error message
    function clearError(input) {
        const parent = input.parentElement;
        const error = parent.querySelector('.error-message');

        // If an error message exists, remove it
        if (error) {
            error.remove();
        }
    }
});
