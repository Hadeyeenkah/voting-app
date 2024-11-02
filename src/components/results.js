// Fetch and display voting results
fetch('/api/candidates')
    .then(response => response.json())
    .then(candidates => {
        const list = document.getElementById('resultsList');
        candidates.forEach(candidate => {
            const li = document.createElement('li');
            li.innerHTML = `${candidate.name}: ${candidate.votes} vote(s)`;
            list.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Error fetching voting results:', error);
    });

