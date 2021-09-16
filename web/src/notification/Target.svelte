<script>
    import { onMount } from 'svelte';
    import { cardList } from '../registry.js';

    export let name;
    export let target;

    let selected;

    function updateTarget() {
        target = entryMap(selected);
    }

    function entryMap(item) {
        return JSON.stringify({
            id: item.id ,
            type: item.type ,
            inbox: item.inbox
        });
    }
    
    onMount( () =>  {
        cardList.subscribe( card => {
            card.forEach( entry => {
                if (entry.name == name) {
                    selected = entry;
                    target   = entryMap(entry);
                }
            })
        })
    });
</script>

<b>Target</b><br>

<select bind:value="{selected}" on:change="{updateTarget}">
        <option>Choose a target</option>
    {#each $cardList as card}
        <option value={card}>{card.name.toUpperCase()}</option>
    {/each}
</select>
