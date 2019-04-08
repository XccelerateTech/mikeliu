//timer.js
const EventEmitter = require('events');

class Timer extends EventEmitter {
    constructor() {
        super();
    }

    count(second) {
        let timePassed = 0;

        let countDown = setInterval(callback, 1000);

        let that = this;

        function callback () {
            let remaining = second - timePassed;

            //when countdown is 0, set to end
            if (remaining == 0) {
                clearInterval(countDown);
            }
            else {
                //e.g. +1 to minor
                timePassed += 1;
            }

            that.emit('tick', remaining)
        };
    };
};

module.exports = Timer;