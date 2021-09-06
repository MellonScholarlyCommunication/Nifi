<script>
	import Modal from './Modal.svelte';
    import SendNotification from './SendNotification.svelte';

	let showModal = false;
</script>

<button on:click="{() => showModal = true}">
	Send Notification
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<SendNotification/>
	</Modal>
{/if}
