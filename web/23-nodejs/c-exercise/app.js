//exercise c
//app.js

const express = require ('express');

const app = express();

app.get('/:user', (req, res) => {
    res.send('you are ' + req.params.user);
});

app.get('/:user/message', (req, res) => {
    res.send('hi ' + req.params.user + ',  please leave a message!');
});

app.get('/', (req, res) => {
    res.send('hi');
});

app.post('/:user/message', (req, res) => {
    console.log('here is your message');
    res.send('you are right!');
});


// app.post('/:user', (req, res) => {
//     // console.log('you are ' + req.params.user);
//     res.send("welcome back!")
// });

app.listen(3000, '127.0.0.1');