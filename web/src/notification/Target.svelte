<script>
    import { onMount } from 'svelte';
    import { targetList } from '../registry.js';

    export let name;
    export let target;

    let selected;

    function updateTarget() {
        target = JSON.stringify(selected);
    }

    function entryMap(item) {
        return JSON.stringify({
            id: item.id ,
            type: item.type ,
            inbox: item.inbox
        });
    }
    
    onMount( () =>  {
        targetList.subscribe( li => {
            li.forEach( entry => {
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
    {#each $targetList as t}
        <option value={t}>{t.name.toUpperCase()}</option>
    {/each}
</select>
