const express = require('express');
require('dotenv').config();
const app = express();

const users = [
    { id: 1, name: 'John Doe', place: 'US' },
    { id: 2, name: 'Jane Doe', place: 'UK' }
]

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
