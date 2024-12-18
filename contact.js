document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple validation (already handled by 'required' in HTML, but you can add more)
        if (name && email && message) {
// Send the form data to the server using AJAX
            formResponse.textContent = `Thank you, ${name}! Your message has been received. We'll get back to you shortly.`;
            formResponse.style.color = 'green';
            formResponse.classList.remove('hidden');

            // Reset the form
            contactForm.reset();
        } else {
            formResponse.textContent = 'Please fill out all fields.';
            formResponse.style.color = 'red';
            formResponse.classList.remove('hidden');
        }
    });
});
