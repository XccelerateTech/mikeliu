//exercise a
//a.js

// function sayHi (callback) {
//     console.log('hi');
//     callback();
// }
// sayHi (function(){
//     console.log('callback');
// })

let arr = [4, 8, 2, 7, 5];

let list = [7, 8, 9, 1, 2];


function processArr (array, callbackFunc){
    let myArr = [];

    // loop all items in array
    for (let i = 0; i<array.length; i++) {
        //pass each array item to callback, then push to new array
        myArr.push(callbackFunc(array[i]));
    }
    console.log (myArr);
};

//callback function
let multiplier = function (input) {
    return input * 2;
}

let plus = function (item) {
    return item + 5;
}

//execution
processArr (arr, multiplier);

processArr (list, plus);

