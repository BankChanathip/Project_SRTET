// server/index.js

const express = require("express");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "SRTET",
});

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/test", (req, res) => {
    res.json({ message: "Hello from server!" });
});
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

