<script>
    export let ldpUrl;
    export let name;
    export let target =`
"id": "${ldpUrl}/${name}/card.ttl#me",
"type": "Person",
"inbox": "${ldpUrl}/${name}/inbox"
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