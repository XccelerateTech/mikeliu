//exercise d
//app.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.get('/', (req, res) => {
    res.send('hi, it is me');
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post('/', (req, res) => {
    let array = req.body.arr;

    console.log(array);

    //reducer function
    // let callbackSum = function (a,b) {
    //     return a + b;
    // };

    //for loop
    let sum = 0;

    console.log('run me first');

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        console.log('test: loop ' + i);
    };

    console.log(sum);

    // console.log(array.reduce(callbackSum));

    res.send('this is a post request message');
});

app.listen(4000, '127.0.0.1');