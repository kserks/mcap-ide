
<script>
  const _expansionState = {
    /* treeNodeId: expanded <boolean> */
  }
  export let tree
  const {label, children} = tree

  let expanded = _expansionState[label] || false
  const toggleExpansion = () => {
    expanded = _expansionState[label] = !expanded
  }
  $: arrowDown = expanded

function selectFile (label){
  console.log(label)
}

</script>

<ul><!-- transition:slide -->
  <li>
    {#if children}
      <span on:click={toggleExpansion}>

        <span class="arrow fa-solid fa-folder"></span>
        {label}
      </span>
      {#if expanded}
        {#each children as child}
          <svelte:self tree={child} />
        {/each}
      {/if}
    {:else}
      <span>
        <span class="no-arrow fa-solid fa-file" on:click={()=>{selectFile(label)}}/>
        {label}
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

  .arrowDown {/* transform: rotate(90deg);*/ }
ul li >span:hover{
  color: #66D9EF;
  cursor: pointer;
}
</style>