import { readable } from 'svelte/store';

async function fetchRegistry() {
	const response  = await fetch('registry.json');
	const data      = await response.json();
	return data;
}

export const targetList = readable([], function start(set) {
	fetchRegistry().then( config => {
		set(config.targets);
	});

	return function stop() {
		// Function that should be run when the last subscriber 
		// Stops reading
	};
});

export const orchestratorList = readable([], function start(set) {
	fetchRegistry().then( config => {
		set(config.orchestrators);
	});

	return function stop() {
		// Function that should be run when the last subscriber 
		// Stops reading
	};
});
