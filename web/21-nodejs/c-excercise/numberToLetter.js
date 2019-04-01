//exercise c
//numberToLetter.js

let number = require('./number');

let numberToLetter = function() {

    theLetter = String.fromCharCode (96 + number());

    return theLetter
    
};

module.exports = numberToLetter;
