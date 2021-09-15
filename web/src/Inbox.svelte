<script>
    import { onMount } from 'svelte';
    import MD5 from "crypto-js/md5";

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

    function md5Color(string) {
        let md5String = MD5(string).toString();
        return `#${md5String.substring(0, 6)}`;
    }

    async function shortAbout(obj) {
        const notification = await loadInbox(obj['id']);    
        const id   = notification['id'];
        const from = notification['actor']['id'] || "unknown";
        const to   = notification['target']['id'] || "unknown";
        let what   = notification['object']['type'] || "unknown";
        let type   = notification['type'] || "";

        what = [].concat(what);
        type = [].concat(type);

        const fromName = from
                            .replaceAll(`${ldpUrl}/`,"")
                            .replaceAll(/\/.*/g,"");

        const toName = to
                            .replaceAll(`${ldpUrl}/`,"")
                            .replaceAll(/\/.*/g,"");
        
        const whatName = what.join("+");
        
        const typeName = type.join("+");
        
        return {
            "id"    : id,
            "color" : md5Color(id),
            "what"  : whatName ,
            "type"  : typeName ,
            "from"  : fromName ,
            "to"    : toName
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

<h3>{title}</h3>

<div><i>{containerUrl}</i> <a href="#" on:click="{handleClick}">Refresh</a></div>

{#await promise}
  <p>...loading inbox</p>
{:then data}
    <table>
    {#each data.contains as obj , i }
      {#if i < maxRows}
        <tr>
            <td>{shortDate(obj.modified)}</td>
            {#await shortAbout(obj)}
              ...loading notification
            {:then about}
                <td>
                <div class="idbox" 
                     title="{about.id}"
                     style="background-color: {about.color}"></div>
                     {about.color}
                    <a href="{obj.id}" title="{about.id}">
                
                <span class="from">{upperCase(about.from)}</span>

                <i>sends</i>

                (
                    <span class="type">{about.type}</span>

                    <i>a</i>
                
                    <span class="what">{about.what}</span>
                )

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
    tr {
        background-color: white;
        width: 100%;
        border: 2px, black;
    }

    .type {
        font-weight: bold;
    }

    .what {
        font-weight: bold;
    }

    .from {
        font-weight: bold;
    }

    .to {
        font-weight: bold;
    }

    .idbox {
        float: left;
        height: 10px;
        width: 10px;
        margin-top: 2px;
        margin-right: 5px;
        border: 1px solid black;
        clear: both;
    }
</style>