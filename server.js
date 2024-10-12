require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get('/oldest-person-ever', (req, res) => {
    connection.query('SELECT * FROM oldest_person ORDER BY age DESC LIMIT 1', (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results[0]);
    });
});

app.get('/oldest-living-person', (req, res) => {
    connection.query('SELECT * FROM oldest_person WHERE alive = 1 ORDER BY age DESC LIMIT 1', (error, results) => {
        if (error) {
            return res.status(500).json({ message: 'Database error' });
        }
        res.json(results[0]);
    });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
