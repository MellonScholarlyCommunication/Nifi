<script>
    import { onMount } from 'svelte';

    // Title of the box
    export let title = 'Inbox';

    // Location of the inbox
    export let ldpUrl; 
    
    // Location of the inbox
    export let containerUrl; 

    // Autorefresh after X seconds
    export let refreshInterval = 30;
    // Maximum number of rows in the output
    export let maxRows = 5; 

    let promise = loadInbox(containerUrl);

    async function loadInbox(url) {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }

    function handleClick() {
        promise = loadInbox(containerUrl);
    }

    function shortId(url) {
        return url.replaceAll(/.*\//g,"");
    } 

    function shortDate(date) {
        return date.replaceAll(/\..+/g,"");
    }

    function upperCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async function shortAbout(obj) {
        const notification = await loadInbox(obj['id']);    
        const from = notification['origin']['id'] || "unknown";
        const to   = notification['target']['id'] || "unknown";
        let type   = notification['type'] || "";

        type = [].concat(type);

        const fromName = from
                            .replaceAll(`${ldpUrl}/`,"")
                            .replaceAll(/\/.*/g,"");

        const toName = to
                            .replaceAll(`${ldpUrl}/`,"")
                            .replaceAll(/\/.*/g,"");
        
        const typeName = type.join("|");

        return {
            "type" : typeName ,
            "from" : fromName ,
            "to"   : toName
        }
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

<h2>{title}</h2>

Location: <input bind:value={containerUrl}> 
          <button on:click={handleClick}>Manual Refresh</button>

{#await promise}
  <p>...loading inbox</p>
{:then data}
    <table>
        <th>Notifications</th>
    {#each data.contains as obj , i }
      {#if i < maxRows}
        <tr>
            <td>{shortDate(obj.modified)}</td>
            {#await shortAbout(obj)}
              ...loading notification
            {:then about}
                <td>
                    <a href="{obj.id}">
                <span class="type">{about.type}</span>

                <i> from </i>

                <span class="from">{upperCase(about.from)}</span>

                <i>to</i>

                <span class="to">{upperCase(about.to)}</span>
                    </a>
                </td>
            {/await}
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

    .type {
        font-weight: bold;
    }

    .from {
        font-weight: bold;
    }

    .to {
        font-weight: bold;
    }
</style>

