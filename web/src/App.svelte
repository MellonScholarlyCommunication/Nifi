<script>
	import Inbox from './Inbox.svelte';
	import SendNotification from './SendNotification.svelte';
	import Send from './Send.svelte';

	export let name;
	export let ldp;

	function capitalize(string) {
		return string.replace(/^\w/, (c) => c.toUpperCase());
	}
</script>

<main>
	<h1>{name}</h1>
</main>

<div class="row">
 <div class="column" >
	<Send fromName="alice"/>
   <h2>{capitalize('alice')}</h2>

	<Inbox title="Inbox"
			containerUrl="{ldp}/alice/inbox"
		   	refreshInterval="30"/>
	<Inbox title="Events"
			containerUrl="{ldp}/alice/events"
			refreshInterval="30"/>
	<Inbox title="Orchestrator"
			containerUrl="{ldp}/o_alice/inbox"
			refreshInterval="30"/>
 </div>
 <div class="column">
	<Send fromName="bob"/>
   <h2>Bob</h2>
	<Inbox title="Inbox"
			containerUrl="{ldp}/bob/inbox"
		   	refreshInterval="30"/>
	<Inbox title="Events"
			containerUrl="{ldp}/bob/events"
			refreshInterval="30"/>
	<Inbox title="Orchestrator"
			containerUrl="{ldp}/o_bob/inbox"
			refreshInterval="30"/>
 </div>
</div>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	* {
        box-sizing: border-box;
    }

    .column {
        float: left;
        width: 50%;
        padding: 25px;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }

	.column {
		border: 1px solid #ccc;
		border-radius: 16px;
	}
</style>