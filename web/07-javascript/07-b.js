// 07-javascript,constructors,prototype,class

//exercise b
function Player(name) {
    this.name = name;
    this.health = 100;
    this.attack = function (rival) {
        rival.health -= 10;
    };
}

// Player.prototype.bonus = 5;

const mary = new Player('Mary');
const paul = new Player('Paul');

let ranAttack = () => {
    let random = Math.floor(Math.random() * 9);
    let round = 1;

    // better to use while loop
    // -> for uncertain times to run the block of code

    // while (condition) {

    // }

    for (let i = 0; i < 1; i++) {
        if (random < 5) {
            mary.attack(paul);

        } else if (random > 5) {
            paul.attack(mary);

        }
        else {
            return ranAttack();
        }
    }

    if (mary.health > 0 && paul.health > 0){
        console.log(random);
        console.log (`Mary's health: ${mary.health}`);
        console.log (`Paul's health: ${paul.health}`);
        ranAttack();

    } else if (mary.health === 0 || paul.health === 0){
        console.log(random);
        console.log (`Mary's health: ${mary.health}`);
        console.log (`Paul's health: ${paul.health}`);
    };
}

ranAttack();

// part c -> add bonus +5, if lost 3 times continously