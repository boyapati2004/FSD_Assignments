// script2.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the input values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (email === '' || password === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Simulate a login process
    if (email === 'admin@example.com' && password === 'admin123') {
        alert('Login successful!');
        // Redirect or take action on successful login
    } else {
        alert('Invalid email or password.');
    }
});