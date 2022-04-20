import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());


 const db = mysql.createPool({
     host: "localhost",
     user: "root",
     password: "",
     database: "SRTET",
 });

 app.get('/', (req, res)=> {
     const sqlSelect = "SELECT * FROM DATA"
     db.query(sqlSelect, (err, result) => {
         res.send(result);
         console.log(result);
     })
 });

app.listen(3001, () => {
    console.log(`Server listening on ${3001}`);
});
 export default app;