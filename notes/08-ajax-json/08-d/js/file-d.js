// exercise d

class User {

    constructor(data) {
        this.firstName = data.name.first;
        this.lastName = data.name.last;
        this.email = data.email;
        this.dob = data.dob;
    };
};

// get the all data via api
function ranGen() {

    let http = new XMLHttpRequest();

    http.open('GET', `https://randomuser.me/api/`);

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            let collect = JSON.parse(http.responseText)
            console.log(collect);
            console.log('list an user profile via api');
        } else {
            console.log('error occured' + http.status);
        }
    };

    http.send();
};

ranGen();

//after got the api data, using .map() to set a function to grab user details
function ranUser(callback) {
    let http = new XMLHttpRequest();

    http.open('GET', `https://randomuser.me/api/?results=5`);

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            // let collect = JSON.parse(http.responseText)
            // let people = collect.results.map(function (user) {
            //     return new User(user);


            let reText = JSON.parse(http.responseText);
            callback(reText.results.map(function (user) {
                    return new User(user);
            }));

            // empty array to store 5 users
            // let arr = [];

            // //  for loop to keep pushing new user into arr for 5 times
            // for (let i = 0; i < 5; i++) {

            //     // push user arry , not upper array
            //     arr.push(people[i]);
            // };

            // print the completed array with 5 users
            // console.log(arr);
            console.log('list 5 users');

        } else {
            console.log('error occured' + http.status);
        }
    };

    http.send();
}
ranUser(function(data){
    console.log(data);
    
});

