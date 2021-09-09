<script>
    export let target =`
"id": "http://127.0.0.1:2000/bob/card.ttl#me",
"type": "Person",
"inbox": "http://127.0.0.1:2000/bob/inbox"
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