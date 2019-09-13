const req = new XMLHttpRequest();

let link = //insert API link here

    function makeGetRequest(link, imagesOrRatings) {
        req.open("GET", link);
        req.send();
        getOnLoad(imagesOrRatings);
    }

function getOnLoad(imagesOrRatings) {
    req.onload = () => {
        if (req.status == 200 || req.status == 201) {
            console.log("GET Request successful");
            data = JSON.parse(req.response);
        } else {
            reject("GET Request failed");
        }
    }
}



function makePostRequest(link, obj) {
    req.open("POST", link);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(obj));
    postOnLoad();
}

function postOnLoad() {
    req.onload = () => {
        if (req.status == 201 || req.status == 200) {
            console.log("req.status was: " + req.status);
            console.log("POST Request successful");
            makeGetRequest();
        } else {
            console.log("req.status was: " + req.status);
            console.log("POST Request failed");
        }
    }
}



function makeDeleteRequest(link) {
    req.open("DELETE", link);
    req.send();
    deleteOnLoad()
}

function deleteOnLoad() {
    req.onload = () => {
        if (req.status == 201 || req.status == 200) {
            console.log("req.status was: " + req.status)
            console.log("DELETE Request successful")
            makeGetRequest();
        } else {
            console.log("req.status was: " + req.status);
            console.log("DELETE Request failed");
        }
    }
}



function makePutRequest(link, obj) {
    req.open("Put", link);
    req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    req.send(JSON.stringify(obj));
    putOnLoad();
}

function putOnLoad() {
    req.onload = () => {
        if (req.status == 201 || req.status == 200) {
            console.log("req.status was: " + req.status);
            console.log("PUT Request successful");
            makeGetRequest();
        } else {
            console.log("req.status was: " + req.status);
            console.log("PUT Request failed");
        }
    }
}