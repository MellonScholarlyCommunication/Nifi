<script>
	import Modal from './Modal.svelte';
    import SendNotification from './SendNotification.svelte';

	export let ldpUrl;
	let showModal = false;
</script>

<button on:click="{() => showModal = true}">
	Send Notification
</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<SendNotification ldpUrl={ldpUrl}/>
	</Modal>
{/if}
