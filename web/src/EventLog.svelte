<script>
    import { onMount } from 'svelte';

     // Location of the eventlog
    export let ldpUrl;
    // Autorefresh after X seconds
    export let refreshInterval = 30; //seconds
    // Maximum number of rows in the output
    export let maxRows = 5; 

    let promise = loadEventlog();

    async function loadEventlog() {
        const response  = await fetch(ldpUrl);
        const data = await response.json();

        return data;
    }

    function handleClick() {
        promise = loadEventlog();
    }

    if (refreshInterval > 0) {
        onMount( 
            () => {
                const interval = setInterval( 
                    () => { handleClick(); } ,  refreshInterval * 1000
                );

                return () => { clearInterval(interval) }
            });
    }
</script>

<h2>Event log @ {ldpUrl}</h2>

Location: <input bind:value={ldpUrl}> 
          <button on:click={handleClick}>Manual Refresh</button>

{#await promise}
  <p>...loading eventlog</p>
{:then data}
    <table>
        <th>Events</th>
    {#each data.contains as url , i }
        {#if i < maxRows}
        <tr>
            <td>{i+1}</td><td><a href="{url}">{url}</a></td>
        </tr>
        {/if}
    {/each}
    </table>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<style>
    input {
        width: 300px
    }

    th {
        text-align: left;
    }

    tr {
        background-color: white;
        width: 100%;
        border: 2px, black;
    }
</style>