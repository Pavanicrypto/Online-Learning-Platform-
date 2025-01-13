const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('client'));

// In-memory storage for demonstration
let progressData = {};

app.post('/api/quiz', (req, res) => {
    const { answer } = req.body;
    // Check the answer and update progress
    if (answer === '4') {
        progressData.quizCompleted = true;
        res.json({ message: 'Correct answer! Progress updated.' });
    } else {
        res.json({ message: 'Try again!' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});