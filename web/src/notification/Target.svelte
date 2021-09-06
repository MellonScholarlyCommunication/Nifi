<script>
    export let target =`
"id": "http://localhost:1999",
"type": "Service",
"inbox": "http://localhost:1999/"
    `.trim();
</script>

<b>Target</b><br>
<textarea bind:value={target}/>

<style>
    textarea {
        width: 400px;
        height: 150px;
        border: 2px dashed #D1C7AC;
    }
</style>