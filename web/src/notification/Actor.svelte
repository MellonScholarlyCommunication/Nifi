<script>
    export let ldpUrl;
    export let name;
    export let actor =`
"id": "${ldpUrl}/${name}/card.ttl#me",
"type": "Person",
"inbox": "${ldpUrl}/${name}/inbox"
    `.trim();
    
</script>

<b>Actor</b><br>
<textarea bind:value={actor}/>

<style>
    textarea {
        width: 400px;
        height: 150px;
        border: 2px dashed #D1C7AC;
    }
</style>