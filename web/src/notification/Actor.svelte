<script>
    import { onMount } from 'svelte';
    import { targetList } from '../registry.js';

    export let name;
    export let actor;

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
                    actor = entryMap(entry);
                }
            })
        })
    });

</script>

<b>Actor</b><br>

{name.toUpperCase()}

<style>
    textarea {
        width: 400px;
        height: 150px;
        border: 2px dashed #D1C7AC;
    }
</style>