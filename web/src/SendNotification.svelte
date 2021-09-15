<script>
    import { v4 as uuidv4 } from 'uuid';
    import Origin from './notification/Origin.svelte';
    import Target from './notification/Target.svelte';
    import Actor from './notification/Actor.svelte';
    import Object from './notification/Object.svelte';
    import Type from './notification/Type.svelte';

    export let fromName;
    export let toName;

    let as2Type;
    let origin;
    let actor;
    let target;
    let object;

    let promise;

    function handleClick() {
        promise = sendToTarget();
    }

    async function sendToTarget() {
        let uuid    = uuidv4();

        if (!origin) {
            throw new Error("need an origin");
        }
        if (!target) {
            throw new Error("need a target");
        }
        if (!object) {
            throw new Error("need an object");
        }
        if (!actor) {
            throw new Error("need an actor");
        }

        let jOrigin = JSON.parse(origin);
        let jTarget = JSON.parse(target);
        let jObject = JSON.parse(object);
        let jActor  = JSON.parse(actor);

        let notification = {
            '@context': [
                "https://www.w3.org/ns/activitystreams",
                "http://purl.org/coar/notify"
            ],
            id: `urn:uuid:${uuid}`,
            type: as2Type ,
            actor: jActor,
            origin: jOrigin ,
            target: jTarget ,
            object: jObject
        };

        // Send the notification to the inbox of the sender ...
        // The orchestrator will forward it to the target
        let response = await fetch(notification.origin.inbox, {
            method: 'POST',
            headers: {
                'Content-Type':'application/ld+json'
            },
            body: JSON.stringify(notification)
        });

        return response.status;
    }

</script>

<div class="main">
<h2>Send Notification</h2>

{#await promise}
<p>...sending notification</p>
{:then status} 
 {#if status}
    {#if status == 200 || status == 201 || status == 202 }
        <p style="color: green">Sent with status {status}</p>
    {:else}
        <p style="color: red">Whoops got a {status}</p>
    {/if}
 {/if}
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<div class="row">
<table>
    <tr>
        <td>
            <Type bind:as2Type/>
        </td>
    </tr>
</table>
</div>

<div class="row">
    <div class="column">

<table>
    <tr>
        <td>
            <Actor bind:actor name={fromName}/>
        </td>
    </tr>
    <tr>
        <td>
            <Origin bind:origin name={fromName}/>
        </td>
    </tr>
    <tr>
        <td>
            <Target bind:target name={toName} />
        </td>
    </tr>
</table>

    </div>
    <div class="column">

<table style="float: left;">
    <tr>
        <td>
            <Object bind:object />
        </td>
    </tr>
</table>

    </div>
</div>

<div class="row">
    <button on:click="{handleClick}">Send</button>
</div>
</div>

<style>
    * {
        box-sizing: border-box;
        width: 100%;
    }

    .column {
        float: left;
        width: 50%;
        padding: 5px;
    }

    .row::after {
        content: "";
        clear: both;
        display: table;
    }
</style>