<script>
	import Modal from './Modal.svelte';
    import SendNotification from './SendNotification.svelte';

	export let fromName;
	export let toName;
	let showModal = false;
</script>

<button on:click="{() => showModal = true}">
	Send Notification
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<SendNotification fromName={fromName} toName={toName}/>
	</Modal>
{/if}
