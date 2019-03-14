// 07 exercise e

class Person {
    constructor (type){
        this.age = type.age;
        this.name = type.name;
    }

    info() {
        return `The person is called ${this.name} and is ${this.age} years old`;
    }
}

const person = new Person ({age: 44, name:'Tom'});
console.log(person.info());
