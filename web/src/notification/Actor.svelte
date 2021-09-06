<script>
    export let actor =`
"id": "https://orcid.org/0000-0002-1825-0097",
"type": "Person",
"inbox": "https://josiahcarberry.com/ldn/inbox",
"name": "Josiah Carberry"
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