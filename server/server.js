const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "customers"
});


app.get('/', (req, res) => {
    return res.json("From Backend Side");
});

app.get('/details', (req, res) => {
    const sql = "SELECT * FROM details";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.listen(8081, () => console.log("Listening on port 8081"));
