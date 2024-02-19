const express = require('express');
require('dotenv').config();
const { accessControl,defaultMiddleware } = require('./middleware');
const app = express();

const users = [
    { id: 1, name: 'John Doe', place: 'US' },
    { id: 2, name: 'Jane Doe', place: 'UK' }
]

const PORT = process.env.PORT || 5000;

// app.use(accessControl);

app.get('/users', [accessControl, defaultMiddleware], (req, res) => {
    res.json(users);
});

app.get('/products', (req, res) => {
    res.send("Products");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
