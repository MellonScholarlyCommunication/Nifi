<script>
	import Inbox from './Inbox.svelte';
	import SendNotification from './SendNotification.svelte';
	import Send from './Send.svelte';

	export let pod;
</script>

{#if pod}
    {#if pod.name}
    <Send fromName={pod.name}/>
    {/if}
        
    {#if pod.inbox}
    <Inbox title="Inbox"
         containerUrl={pod.inbox}
         refreshInterval="30"/>
    {/if}

    {#if pod.outbox}
    <Inbox title="Events"
         containerUrl={pod.outbox}
         refreshInterval="30"/>
    {/if}
{/if}