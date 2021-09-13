<script>
    export let ldpUrl;
    export let name;
    export let origin = `
"id": "${ldpUrl}/o_${name}/card.ttl#me",
"type": "Service",
"inbox": "${ldpUrl}/o_${name}/inbox"
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