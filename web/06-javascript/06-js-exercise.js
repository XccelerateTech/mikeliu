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
    { name: "Lionel Messi", club: "FC Barcelona" },
    { name: "Christiano Ronaldo", club: "Real Madrid" },
    { name: "Luis Suarez", club: "FC Barcelona" },
    { name: "Gareth Bale", club: "Real Madrid" },
    { name: "Manuel Neuer", club: "FC Bayern Munchen" }
]
//higher-order function
let filterOut = players.filter(playerName => playerName.club !== "FC Barcelona");

for (let i = 0; i < filterOut.length; i++) {
    console.log(filterOut[i].name);
}

//without higher-order function

//   var filterOut = players.filter(function(playerName){
//       return playerName.club !== "FC Barcelona");
//   });

//   for (let i=0;i<filterOut.length;i++){
//       console.log(filterOut[i].name);
//     }


//exercise d

var marks = [
    { mark: 99 },
    { mark: 80 },
    { mark: 60 },
    { mark: 70 },
    { mark: 50 },
    { mark: 67.6 },
    { mark: 62.4 },
    { mark: 87.5 },
    { mark: 55 }
];

const count = (total, num) => total + num; {
    const arr = [];

    for (let i = 0; i < marks.length; i++) {
        let round = Number(marks[i].mark);

        arr.push(round);
    }

    const totalSum = arr.reduce(count);
    const answer = (totalSum / marks.length).toFixed();
    console.log(answer);
}
count(marks);

//
//exercise e
function uefaEuro2016(teams, score) {

    const national = teams;
    const num = score;

    if (num[0] === num[1]) {
        console.log(`At match ${national[0]} - ${national[1]}, teams played draw!`);

    } else if (num[0] > num[1]) {
        console.log(`At match ${national[0]} - ${national[1]}, ${national[0]} won!`);

    } else if (num[0] < num[1]) {
        console.log(`At match ${national[0]} - ${national[1]}, ${national[1]} won!`);
    }
}

// the function should result in...

// "At match Germany - Ukraine, Germany won!"
uefaEuro2016(['Germany', 'Ukraine'], [2, 0])

// "At match Belgium - Italy, Italy won!"
uefaEuro2016(['Belgium', 'Italy'], [0, 2])

// "At match Portugal - Iceland, teams played draw."
uefaEuro2016(['Portugal', 'Iceland'], [1, 1])

//
//exercise f

const letter = 'jabcdefghi';

let transform = (num) => {

    let arr = num.split('');

    let reduceLetter = arr.reduce(function (list, index) {
        list.push(letter[index]);
        return list;
    }, [])

    // let reduceLetter = arr.reduce(list,index)=>arr.letter(index) {...}

    reduceLetter.sort();

    let sortLetterArr = reduceLetter.join('');

    console.log(sortLetterArr);

}
transform('213');

//'213' //abc


// bonus //
//
//exercise g

//
//exercise h

//
//exercise i