// 07 exercise d

class Monster {

    constructor(name) {
        this.name = name;
        this.health = 100;
    }

    wounded(attack) {
        this.health -= Math.min(this.health, attack)

        console.log('Damage');
        console.log(attack);
        console.log(`${this.name} remains ${this.health}`);
        console.log(' ');
        

        if (this.health <= 0) {
            console.log(`${this.name} dead`);
        }
    }
    // Math.min(a,b) -> will choose which parameter is the lowest value, then pick that one
}

const hero = (boss) => {
    let attack = Math.floor(Math.random() * (10 - 5 + 1) + 5)
    boss.wounded(attack);
}

const boss = new Monster('Boss');

while (boss.health > 0) {
    hero(boss)
}