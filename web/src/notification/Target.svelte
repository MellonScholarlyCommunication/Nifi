<script>
    export let target =`
"id": "http://157.193.231.95",
"type": "Service",
"inbox": "http://157.193.231.95/inbox"
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