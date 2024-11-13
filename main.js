
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