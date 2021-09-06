<script>
    import { onMount } from 'svelte';

    let ldpUrl = "http://157.193.231.95/inbox";
    let refreshInterval = 30; // seconds

    let promise = loadInbox();

    async function loadInbox() {
        const response  = await fetch(ldpUrl);
        const data = await response.json();

        return data;
    }

    function handleClick() {
        promise = loadInbox();
    }

    onMount( 
         () => {
            const interval = setInterval( 
                () => { handleClick(); } ,  refreshInterval * 1000
            );

            return () => { clearInterval(interval) }
         });
</script>

<h2>Inbox @ {ldpUrl}</h2>

Location: <input bind:value={ldpUrl}> 
          <button on:click={handleClick}>Manual Refresh</button>

{#await promise}
  <p>...loading inbox</p>
{:then data}
    <table>
        <th>Notifications</th>
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

