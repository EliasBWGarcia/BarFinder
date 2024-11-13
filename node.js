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
    host:"localhost",
    user:"root",
    password:"hejsa",
    database:"pokemon"
});

app.get('/',(req, res)=>{
    connection.query('SELECT `name` FROM pokemon',(error,results)=>{
        res.send(results);
    });
});

//Find single pokemon by name
app.get('/pokemon/:name/', (req,res)=>{
    const pokemonUserRequest = req.params.name;
    connection.query('SELECT * FROM pokemon WHERE ´name´ = ?',
        [pokemonUserRequest],
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
    connection.query('SELECT `name` FROM bar
    join adress on bar.bar_id = bar_adress.bar_id
    WHERE bar_adress.adress =' 'UserRequest' ,
    (error, results) => {
        res.send(results);
    });
});