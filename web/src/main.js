import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Mellon Demonstrator',
		ldp: 'http://157.193.231.95/institution'
	}
});

export default app;