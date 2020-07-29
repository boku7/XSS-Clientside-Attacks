<script>
    function catchClick () {
        alert("Caught your Click!");
        location.href = "localhost:4444";
    }   
    document.body.addEventListener('click', catchClick, true);
</script>
