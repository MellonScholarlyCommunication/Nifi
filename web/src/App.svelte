<script>
	import Inbox from './Inbox.svelte';
	import SendNotification from './SendNotification.svelte';
	import EventLog from './EventLog.svelte';
	import Send from './Send.svelte';
	export let name;
</script>

<main>
	<h1>{name}</h1>
</main>

<Send/>

<div class="row">
 <div class="column">
	<Inbox ldpUrl="http://localhost:2000/alice/inbox"
		   refreshInterval="30"/>
 </div>
 <div class="column">
	<EventLog ldpUrl="http://127.0.0.1:2000/alice/events"
			  refreshInterval="30"/>
 </div>
</div>

<div class="row">
	<div class="column">
	   <Inbox ldpUrl="http://localhost:2000/bob/inbox"
			  refreshInterval="30"/>
	</div>
	<div class="column">
	   <EventLog ldpUrl="http://127.0.0.1:2000/bob/events"
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