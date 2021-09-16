<script>
    import { resetCount } from './stores.js';

    function refreshAll() {
        resetCount.update(n => n + 1);
        return true;
    }
</script>

<button on:click="{refreshAll}">Refresh All</button>