document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const answer = document.getElementById("question").value;
    
    // Simulate sending answer to the server
    fetch('/api/quiz', {
        method: 'POST',
        body: JSON.stringify({ answer }),
        headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        // Update progress data here
    });
});