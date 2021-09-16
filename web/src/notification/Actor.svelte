<script>
    import { onMount } from 'svelte';
    import { cardList } from '../registry.js';

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
        cardList.subscribe( li => {
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