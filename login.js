

function getInfo() {
    var req = new XMLHttpRequest();
    req.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            doing(this);
        }
    }
    req.open("get", "new_data.json", true);
    req.send();

}


function doing(x1) {

    var jso = JSON.parse(x1.responseText);
    var l = Object.keys(jso).length;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < l; i++){
        if(username == jso[i].username && password == jso[i].password) {
            // console.log(username + " is logged in!!!");
            window.location.href = "index.html";
            return ;
        }
    }
    console.log("incorrect username or password");

}