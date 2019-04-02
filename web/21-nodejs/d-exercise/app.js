//app.js
const Timer = require('./timer');

let theTimer = new Timer();

theTimer.on ('tick', function(remaining){
    if (remaining == 0) {
        console.log ('goodbye world!');
    }
    else {
        console.log(`time remaining: ${remaining}`);
    }
});

theTimer.count(3);