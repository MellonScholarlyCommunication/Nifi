<script>
    import { onMount } from 'svelte';
    import { cardList } from '../registry.js';

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
        cardList.subscribe( card => {
            // Find the orchestrator for a name
            const nameCard = card.filter( entry => entry.name == name);

            if (nameCard.length == 0) {
                return;
            }

            // We take the first hit..
            const orchestrator = nameCard[0].orchestrator;

            // Find the orchestrator inbox
            const orchestratorCard = card.filter( entry => entry.id == orchestrator);
            
            if (orchestratorCard == 0) {
                return;
            }

            origin = entryMap(orchestratorCard[0]);
        })
    });
</script>

<b>Origin</b><br>

{name.toUpperCase()}'S ORCHESTRATOR
