
<script>
  export let tree

  const _expansionState = {
    /* treeNodeId: expanded <boolean> */
  }

  $:name = tree.name
  $:children = tree.children

  let expanded = _expansionState[name] || false
  const toggleExpansion = () => {
    expanded = _expansionState[name] = !expanded
  }


function selectFile (name){

  console.log(name)
}

</script>

<ul><!-- transition:slide -->
  <li>
    {#if children}
      <span on:click={toggleExpansion}>

        <span class="arrow fa-solid fa-folder"></span>
        {name}
      </span>
      {#if expanded}
        {#each children as child}
          <svelte:self tree={child} />
        {/each}
      {/if}
    {:else}
      <span>
        <span class="no-arrow fa-solid fa-file" on:click={()=>{selectFile(name)}}/>
        {name}
      </span>
    {/if}
  </li>
</ul>

<style>
  ul {
    margin: 0;
    list-style: none;
    padding-left: 1.2rem; 
    user-select: none;
  }
  .no-arrow { padding-left: 1.0rem; }
  .arrow {
    cursor: pointer;
    display: inline-block;
    /* transition: transform 200ms; */
  }

ul li >span:hover{
  color: #66D9EF;
  cursor: pointer;
}
</style>