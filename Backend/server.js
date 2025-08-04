const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

// Optional base route
app.get('/', (req, res) => {
  res.send('Welcome to the Intern Dashboard Backend!');
});

// Actual API route
app.get('/api/intern-data', (req, res) => {
  res.json({
    name: "Mahak Gupta",
    referralCode: "mahak2025",
    donations: 5000,
    rewards: ["Badge 1", "Badge 2"]
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

