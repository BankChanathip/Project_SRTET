// server/index.js

const express = require("express");

var mysql = require('mysql');
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "SRTET",
});

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/data", (req, res) => {
    const sqlSelect = "SELECT * FROM DATA"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
        console.log(result);
    })

});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

