import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Mellon Demonstrator (Dev)',
		ldp: 'http://127.0.0.1:2000'
	}
});

export default app;