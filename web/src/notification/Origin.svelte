<script>
    import { onMount } from 'svelte';
    import { orchestratorList } from '../registry.js';

    export let name;
    export let origin;

    function entryMap(item) {
        return JSON.stringify({
            id: item.id ,
            type: item.type ,
            inbox: item.inbox
        });
    }

    onMount( () =>  {
        orchestratorList.subscribe( li => {
            li.forEach( entry => {
                if (entry.name == name) {
                    origin = entryMap(entry);
                }
            })
        })
    });
</script>

<b>Origin</b><br>

{name.toUpperCase()}'S ORCHESTRATOR
