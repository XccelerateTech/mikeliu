const pg = require('pg');

const config = {
    user: 'mikeliu',
    database: 'test',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    max: 10, // max number of clients in the pool
    idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
}

let user = new pg.Client(config);

user.connect();

user.query('SELECT * FROM citrus WHERE color = \'orange\'', function(err, results) {
    if (err) {
        console.log(err);
    }
    
    //property-> row , to show the data table in row
    console.log(results.rows);
    
});