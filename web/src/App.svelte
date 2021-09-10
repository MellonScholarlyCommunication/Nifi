<script>
	import Inbox from './Inbox.svelte';
	import SendNotification from './SendNotification.svelte';
	import Send from './Send.svelte';
	export let name;
	export let ldp;
</script>

<main>
	<h1>{name}</h1>
</main>

<Send ldpUrl="{ldp}"/>

<div class="row">
 <div class="column">
	<Inbox title="Alice's inbox"
			ldpUrl={ldp}
			containerUrl="{ldp}/alice/inbox"
		   	refreshInterval="30"/>
 </div>
 <div class="column">
	<Inbox title="Alice's events"
		    ldpUrl={ldp}
			containerUrl="{ldp}/alice/events"
		   	refreshInterval="30"/>
 </div>
</div>

<div class="row">
	<div class="column">
		<Inbox title="Bob's inbox"
				ldpUrl={ldp}
				containerUrl="{ldp}/bob/inbox"
				refreshInterval="30"/>
	</div>
	<div class="column">
		<Inbox title="Bob's events"
				ldpUrl={ldp}
				containerUrl="{ldp}/bob/events"
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
        padding: 5px;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }
</style>