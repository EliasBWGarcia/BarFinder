
//endpoints
//finder alle barer
app.get('/all', (req, res) => {
    connection.query('SELECT `name` FROM bar', (error, results) => {
        res.send(results);
    })
})
