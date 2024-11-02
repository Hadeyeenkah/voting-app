import React from 'react';

function App() {
    return (
        <div>
            <h1>Hello, World!</h1>
        </div>
    );
}
export default App;


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send the username and password to the backend
    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        if (response.ok) {
            messageDiv.textContent = data.message; // Display success message
            messageDiv.style.color = 'green';
            // Redirect or handle successful login
        } else {
            messageDiv.textContent = data.error; // Display error message
            messageDiv.style.color = 'red';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Failed to log in. Please try again.';
        messageDiv.style.color = 'red';
    });
});
