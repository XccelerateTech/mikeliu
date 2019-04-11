//promise
const fs = require('fs');

function readPromise(path) {
    new Promise(function (resolve, reject) {
        fs.readdir(path, function (err, files) {
            if (err) {
                reject(err);
            }
            else {                
                let pathArr = [];
                for (let i=0; i<files.length; i++) {
                    pathArr.push(path + '/' + files[i]);
                }
                resolve(pathArr);
            }
        })
    })
    .then(function(fullPath) {
        for (let i=0; i<fullPath.length; i++) {
            // console.log(fullPath[i]);
            statPromise(fullPath[i]);
        }
    })
    .catch(function(error){
        throw error;
    })
};


function statPromise (input) {
    new Promise (function (resolve, reject) {
        fs.stat(input, function(err, stats) {
            if (err){
                reject(err);
            }
            else {
                resolve(stats);
            };
        });
    })
    .then(function(result) {
        if (result.isFile()) {
            console.log(input + ' it\'s file');
        }
        else if (result.isDirectory()) {
            console.log(input + ' it\'s directory');
            readPromise(input);
        };
    })
    .catch(function(error) {
        throw error;
    })
};


readPromise(__dirname);

// statPromise(__dirname);







//use parameter as a folder path, then can pass any path to the function
// function readPromise(thepath) {
//     fs.readdir(thepath, function (err, files) {
//         if (err) {
//             throw err;
//         }
//         else {

//             for (let i = 0; i < files.length; i++) {
//                 console.log(thepath + '/' + files[i]);
//             };

//         };
//     });
// };

// readPromise(__dirname);

// function statPromise (input) {
//     fs.stat(input, function(err, stats) {
//         if (err){
//             throw err;
//         }
//         else {
//             console.log(err);
//             console.log(stats);
//             console.log(stats.isDirectory());
//         };
//     });
// };

// statPromise(__dirname + '/' + 'README.md');


//promise use callback function, have to input a callback
// let check = true;

// const promise = new Promise(function(resolve, reject){
//     if (check === true) {
//         resolve('pass');
//     }
//     else {
//         reject('fail');
//     }
// })
// .then(function(result) {
//     console.log(result);

// })
// .catch(function(resultErr) {
//     console.log(resultErr);

// })
// .finally(function(){
//     console.log('it\'s end');

// })
