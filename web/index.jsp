<script type="text/javascript">
    var ws = new WebSocket("ws://localhost:8080/rwx");
    ws.onopen = function(){
        ws.send("Hello World");
    };
    ws.onmessage = function(event){
        document.getElementById('rwx').innerHTML = event.data;
    };

</script>
<div id="rwx"></div>