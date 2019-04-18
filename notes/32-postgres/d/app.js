//exercise d
//npm csv-reader, pg (both plugin packages) & fs are required

const pg = require('pg');
const fs = require('fs');
const csvReader = require('csv-reader');
const { getDataSql, buySql, sellSql } = require('./sql');

const user = new pg.Client('mikeliu://postgres:postgres@localhost:5432/test');
user.connect();
console.log('connected');

const readStream = fs.createReadStream('transaction_record.csv', 'utf8');
const readCsv = readStream.pipe(csvReader({ parseNumbers: true, parseBooleans: true, trim: true }));

let orderArr = [];
readCsv.on('data', function (row) {
    orderArr.push(row);

})

readCsv.on('end', function () {
    loopData(orderArr);
    // console.log(orderArr);
})

function loopData(fullData) {
    for (let i = 0; i < fullData.length; i++) {
        matchSqlTable(fullData[i]);
        // console.log(fullData[i]);
    };
};

function matchSqlTable(order) {
    new Promise(function (resolve, reject) {
        // console.log('value: ' + value);
        let value = [order[1]];
        user.query(getDataSql, value, function (err, data) {
            if (err) {
                // console.log("ERROR:" + order);
                reject(err);
            }
            else {
                // console.log(data.rows[0]);
                resolve(data.rows);
            };
        })
    })
        .then(function (theData) {
            // console.log(theData);
            begin([order, theData]);
        })
        .catch(function (err) {
            console.log(err);
        })
};



function begin(theArr) {
    new Promise(function (resolve, reject) {
        user.query('BEGIN', function (err) {
            if (theArr[0][2] > theArr[1][0].quantity) {
                console.log(`${theArr[0][1]} has not enough`);
                reject(err)
            }
            resolve(theArr)
        })
    })
        .then(function (theArr) {
            if (theArr[0][0] === "BUY") {
                addOrder(theArr[0][2], theArr[0][1]);
            }
            else {
                lessOrder(theArr[0][2], theArr[0][1]);
            }
        })
        .catch(function (err) {
            console.log(err);
            rollback();
        })
};


function addOrder(quantity, name) {
    let value = [quantity, name]
    user.query(buySql, value, function (err) {
        if (err) {
            rollback();
        }
        else {
            console.log(`${value[1]} is bought ${value[0]}.`);
            commit();
        }
    })
};

function lessOrder(quantity, name) {
    let value = [quantity, name]
    user.query(sellSql, value, function (err) {
        if (err) {
            rollback();
        }
        else {
            console.log(`${value[1]} is sold ${value[0]}.`);
            commit();
        }
    })
};


function commit() {
    user.query('COMMIT', function (err) {
        if (err) {
            console.log(err);
        }
    })
};

function rollback() {
    user.query('ROLLBACK', function (err) {
        if (err) {
            console.log(err);
        }
    })
};