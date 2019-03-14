// js file

// exercise b

function whoIsInSpace(callback) {

    // first instantiate the object and store it in a varible
    let http = new XMLHttpRequest();

    http.open('GET', `http://api.open-notify.org/astros.json`);

    // ready stage that once the response will fire different status codes saved in readyState
    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            callback(http.responseText) // get data to DOM
        } else {
            console.log('error occurred' + http.status);
        }
    }
    // onreadystatechange should be before http.send()
    http.send();
}

whoIsInSpace(function (data) {
    console.log(JSON.parse(data));
})


