<script>
    export let origin = `
"id": "http://157.193.231.95",
"type": "Service",
"inbox": "http://157.193.231.95/inbox"
    `.trim();
</script>

<b>Origin</b><br>
<textarea bind:value={origin}/>

<style>
    textarea {
        width: 400px;
        height: 150px;
        border: 2px dashed #D1C7AC;
    }
</style>