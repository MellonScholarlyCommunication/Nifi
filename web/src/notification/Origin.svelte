<script>
    export let origin = `
"id": "http://127.0.0.1:2000/alice/card.ttl#me",
"type": "Person",
"inbox": "http://127.0.0.1:2000/alice/inbox"
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