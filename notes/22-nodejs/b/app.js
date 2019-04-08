//exercise b
//app.js

let fs = require('fs');

let copy = function (path) {

let readMe = fs.createReadStream(__dirname + path, {encoding: 'utf8', highWaterMark: 32 * 1024});

let writeMe = fs.createWriteStream(__dirname + '/text.txt');

// readable.on('data', function(chunk){
//     console.log(chunk.length);
// });

readMe.pipe(writeMe);

};

copy('/text/move.txt');
