const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Simple Node Server Running');
});

const users = [
    {id: 1, name: 'Jakaria', email: 'jakariamahmud016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
    {id: 2, name: 'Srabon', email: 'nazmus016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
    {id: 3, name: 'Topu', email: 'topuk016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
    {id: 4, name: 'Tanim', email: 'tanimd016@gmail.com', address: 'Kushtia', University: 'Islamic University'},
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, () => {
    console.log(`Simple Node Server Running on port ${port}`);
})