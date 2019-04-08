// 07-javascript,constructors,prototype,class

//exercise a
function Person (name, age) {
        this.name = name;
        this.age = age;
}

Person.prototype.weight = 55;

//new syntax by using class
// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
let tommy = new Person('Tommy',35);
console.log(tommy);

console.log(`Tommy's weight: ${tommy.weight} kg`);

