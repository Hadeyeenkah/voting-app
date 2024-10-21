document.getElementById('addCandidateForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const candidateName = document.getElementById('candidateName').value;

    // Send the candidate name to the backend
    fetch('/api/candidate/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: candidateName })
    })
    .then(response => response.json())
    .then(data => {
        // Display the newly added candidate in the list
        const list = document.getElementById('candidateList');
        const li = document.createElement('li');
        li.textContent = data.name; // Assuming the response contains the candidate's name
        list.appendChild(li);

        // Clear the input field after submission
        document.getElementById('candidateName').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to add candidate. Please try again.');
    });
});

