<script>
    export let ldpUrl;

    export let target =`
"id": "${ldpUrl}/bob/card.ttl#me",
"type": "Person",
"inbox": "${ldpUrl}/bob/inbox"
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