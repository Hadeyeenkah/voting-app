// Simulated candidate data - you can replace this with data from your backend
const candidates = [
    { id: 1, name: "Candidate A" },
    { id: 2, name: "Candidate B" },
    { id: 3, name: "Candidate C" }
];

// Display the list of candidates with a vote button
const candidateList = document.getElementById('candidateList');

candidates.forEach(candidate => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        ${candidate.name}
        <button onclick="vote(${candidate.id})">Vote</button>
    `;
    candidateList.appendChild(listItem);
});

// Function to handle the voting process
function vote(candidateId) {
    const selectedCandidate = candidates.find(c => c.id === candidateId);

    // Simulating vote submission (in a real app, you'd make an API call here)
    document.getElementById('message').innerText = `You voted for ${selectedCandidate.name}`;
}
fetch('/api/candidates')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(candidates => {
        const list = document.getElementById('candidateList');
        candidates.forEach(candidate => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${candidate.name} <button onclick="vote(${candidate.id})">Vote</button>
            `;
            list.appendChild(li);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
    


