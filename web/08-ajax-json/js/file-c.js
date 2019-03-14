// exercise c

function namesInSpace(allName) {

    let http = new XMLHttpRequest();

    http.open('GET', `http://api.open-notify.org/astros.json`);

    http.onreadystatechange = function () {
        if (http.readyState != XMLHttpRequest.DONE) {
            return;
        } else if (http.status == 200) {
            let parsed = JSON.parse(http.responseText)
            allName(parsed.people.map(function (p) {
                return p.name
            }))
        } else {
            console.log('error occurred' + http.status);
        }
    }

    http.send();
}

namesInSpace(function (allName) {
    console.log(allName);
})