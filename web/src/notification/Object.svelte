<script> 
    export let object=`
{
  "id": "https://origin-system.org/resources/0021",
  "ietf:cite-as": "https://doi.org/10.4598/12123487",
  "type": "Document"
}
    `.trim();
</script>

<b>Object</b><br>
<textarea bind:value={object}/>

<style>
    textarea {
        width: 400px;
        height: 150px;
        border: 2px dashed #D1C7AC;
    }
</style>