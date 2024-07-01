document.addEventListener('DOMContentLoaded', () => {
    // Interactive menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
    });

    // Form validation and submission
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Basic client-side validation
        const name = sanitizeInput(document.getElementById('name').value);
        const email = sanitizeInput(document.getElementById('email').value);
        const message = sanitizeInput(document.getElementById('message').value);

        if (!validateEmail(email)) {
            formResponse.textContent = 'Please enter a valid email address.';
            formResponse.style.color = 'red';
            return;
        }

        try {
            const response = await submitForm({ name, email, message });
            formResponse.textContent = response.message;
            formResponse.style.color = 'green';
        } catch (error) {
            formResponse.textContent = 'An error occurred. Please try again later.';
            formResponse.style.color = 'red';
        }
    });

    // Function to sanitize user input
    function sanitizeInput(input) {
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }

    // Function to validate email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Simulated form submission function
    async function submitForm(data) {
        // Simulate a network request
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ message: 'Thank you for your message!' });
            }, 1000);
        });
    }
});
