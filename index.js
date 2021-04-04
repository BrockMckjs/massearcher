const express = require('express');
const app = express();
const http = require('https');
const path = require('path');

app.set("view engine", "ejs")
app.set('views', path.join(__dirname))
app.use(express.static(__dirname));


app.get('/', (req, res) => {
    res.render('front.ejs')
})


app.get('/', (req, res) => {
    res.render('front.ejs')
})






app.listen(3000, console.log("listening on port 3000"))