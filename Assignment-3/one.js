document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    // Validate the data
    if (name && email && msg) {
        // Show the confirmation message
        document.getElementById('confirmation').style.display = 'block';

        // Clear the form fields
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});


