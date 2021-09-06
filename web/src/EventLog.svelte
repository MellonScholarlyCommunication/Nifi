<script>
    import { onMount } from 'svelte';

    let ldpUrl = "http://localhost:1998";
    let refreshInterval = 30; // seconds

    let promise = loadEventlog();

    async function loadEventlog() {
        const response  = await fetch(ldpUrl);
        const data = await response.json();

        return data;
    }

    function handleClick() {
        promise = loadEventlog();
    }

    onMount( 
         () => {
            const interval = setInterval( 
                () => { handleClick(); } ,  refreshInterval * 1000
            );

            return () => { clearInterval(interval) }
         });
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
        <tr>
            <td>{i+1}</td><td><a href="{url}">{url}</a></td>
        </tr>
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