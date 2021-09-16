<script>
	import PodView from './PodView.svelte';
	import PodSelector from './PodSelector.svelte';
	import Refresher from './Refresher.svelte';

	export let name;
	export let pod1;
	export let pod2;
	export let pod3;
	export let pod4;
</script>

<main>
	<h1>{name}</h1>
</main>

<Refresher/>

<div class="row">
 <div class="column" >
	 <PodSelector bind:pod={pod1}/>
	 <PodView pod={pod1}/>
 </div>
 <div class="column">
	 <PodSelector bind:pod={pod2}/>
	 <PodView pod={pod2}/>
 </div>
</div>

<div class="row">
	<div class="column" >
		<PodSelector bind:pod={pod3}/>
		<PodView pod={pod3}/>
	</div>
	<div class="column">
		<PodSelector bind:pod={pod4}/>
		<PodView pod={pod4}/>
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