import { readable } from 'svelte/store';

async function fetchRegistry() {
	const response  = await fetch('registry.json');
	const data      = await response.json();
	return data;
}

export const cardList = readable([], function start(set) {
	fetchRegistry().then( config => {
		set(config.cards);
	});

	return function stop() {
		// Function that should be run when the last subscriber 
		// Stops reading
	};
});