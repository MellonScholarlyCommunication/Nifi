<script>
    export let as2Type;

    let as2Types = [
        'Offer'  ,
        'Accept' ,
        'Reject' ,
        'Undo'   ,
        'Annouce',
    ];
</script>

<b>Type</b><br>
<select bind:value={as2Type}>
    {#each as2Types as t}
        <option value={t}>{t}</option>
    {/each}
</select>