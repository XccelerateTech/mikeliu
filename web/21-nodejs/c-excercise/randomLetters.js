//exercise c
//text.js

let numberToLetter = require('./numberToLetter');

let s ='';

let randomLetters = function(input) {
    for(let i = 0; i < input; i++ ) {
        s += numberToLetter();
    };
    
    console.log(s);
};

module.exports = randomLetters;
