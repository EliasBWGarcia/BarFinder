//npm install express --save
const express = require("express");
//npm install mysql2 --save
const mysql = require("mysql2");
//npm install cors --save
const cors = require("cors");

const app = express();
const port = 3000;

app.use(cors());

//Host, user, password database
const connection = mysql.createConnection({
    host:process.env.host,
    user:process.env.user,
    password: process.env.password,
    database: process.env.database
});

app.get('/',(req, res)=>{
    connection.query('SELECT `name` FROM mydb',(error,results)=>{
        res.send(results);
    });
});

//Find single pokemon by name
app.get('/bar/:bar.name/', (req,res)=>{
    const barNameRequest = req.params.name;
    connection.query('SELECT * FROM mydb WHERE ´name´ = ?',
        [barNameRequest],
        (error, results)=>{
            res.send(results);
        });

});

app.get('/pokedexnumber/:name/', (req,res)=>{});

app.listen(port, () =>{
    console.log(`Application is now running on port ${port}`);
});



//endpoints
//finder alle barer
app.get('/all', (req, res) => {
    connection.query('SELECT `name` FROM bar', (error, results) => {
        res.send(results);
    })
})

//finder barer ud fra bynavn
//er ikke sikker på om jeg har joinet rigtigt // om jeg ahr husket navnene rigtigt
app.get('/adress/:city', (req, res) => {
    const UserRequest = req.params.adress
    connection.query('SELECT `name` FROM bar ' +
        'join adress on bar.bar_id = bar_adress.bar_id' +
        'WHERE bar_adress.adress =' + 'UserRequest',
    (error, results) => {
        res.send(results);
    });
});