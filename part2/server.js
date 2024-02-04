const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <h2>Registration Form</h2>
        <form action="/register" method="POST">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br>
            <label for="password">Password:</label><br>
            <input type="password" id="password" name="password" required><br><br>
            <input type="submit" value="Register">
        </form>
    `);
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    if (password.length < 8) {
        res.send("Error: Password is less than 8 characters");
    } else {
        res.send("Registration success");
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
