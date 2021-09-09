<script>
    export let ldpUrl;

    export let origin = `
"id": "${ldpUrl}/alice/card.ttl#me",
"type": "Person",
"inbox": "${ldpUrl}/alice/inbox"
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