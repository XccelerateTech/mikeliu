// 06-javascript exercise

// array, dot notation
let person = {
    'myName': 'Peter'
}

console.log(person.myName);

// array, bracket notation
let otherPerson = {
    'first name': 'Tom',
    'last name': 'White'
}

console.log(otherPerson['first name']);


//
// quiz 1

let xccelerateInstructor = {
    'name': "Sam O'Shaughnessy",
    'favourite language': 'Javascript',
}

console.log(xccelerateInstructor['favourite language']);
// outcome, Javascript;

console.log(xccelerateInstructor['favourite food']);
// outcome, undefined;


//
// exercise a

// population
let asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

console.log(asia.countries['India']['Mumbai']);
// output, 18.5

console.log(asia.countries['China']['Beijing']);
// output, 21.5

console.log(asia.countries['China']['Hong Kong']);
// output, 7.3


// damilyBankValues
var familyBankValues = {
    familyMembers: {
        Mother: {
            "account number": 8096291,

            accountBalance: 10000000
        },

        Father: {
            "account number": 8096292,

            accountBalance: 9999999

        },

        Sister: {

            "account number": 8096293,

            accountBalance: 10000

        },

        "Step Brother": {

            "account number": 8096292,

            accountBalance: 15000
        }
    }
}

let infoList = [];

/* infoList.push(familyBankValues.familyMembers["Step Brother"]["account"];
 */
console.log(familyBankValues.familyMembers["Mother"]["account number"]);
//outcome, mother's account no.

console.log(familyBankValues.familyMembers["Father"]["accountBalance"]);
//outcome, father's account balance

//push the values of step brother into array (infoList)
console.log(infoList.push(familyBankValues.familyMembers["Step Brother"]["account number"]));

console.log(infoList.push(familyBankValues.familyMembers["Step Brother"]["accountBalance"]));

console.log(infoList);
//outcome, step brother's account no. & account, store info in an array


//
//arrays

//exercise b

let convertNum = (i) => {

let num = i + "";

return num.split("").reverse().join("")


}

console.log(convertNum(12345));
//outcome, 54321

//exercise c

var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

let filterOut = players.filter(players !== "FC Barcelona");

console.log(filterOut);

