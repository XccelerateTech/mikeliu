//exercise b
//app.js

const express = require('express');

const app = express();

// app.get('/', (req, res) => {
//     res.send()
// })

//serving all static files e.g. html, css
app.use(express.static('public'));


app.use('/', (req, res, next) => {
    console.log('sdfsdgsd ' + req.url);
    next();    
})

app.listen(4000, '127.0.0.1');