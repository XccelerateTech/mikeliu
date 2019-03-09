// js-exercise g //

let x = 8;
let y = 3;

console.log(x == y);
console.log(x && y < 10);
console.log(x || y <= 8);
console.log(y === '3');
console.log(x == 5);



/*let a = 1;
let b = 2;

console.log(a+b);

if (a!==b) {
	console.log( a + ' & ' + b + ' are not the same.');
}
*/

/*function*/

// function type a

function a (b,c) {
	return b + c;
}

console.log(a(4, 1));

// function type b

let yourName = function (firstName, lastName) {
	return firstName + " " + lastName;
}

console.log(yourName('Mike','Liu'));


//bonus exercise

function area (height,width) {
	return height * width;
}

console.log(area(100,10));

//
/*    function getStock (stock, callback){

        alert(`Getting the stock: ${stock}.`);

        callback();

    }

 

    function gotStock(stock){

        alert(`Got stock: ${stock}`);

    }

    getStock('HSBC', gotStock('HSBC'));

*/





