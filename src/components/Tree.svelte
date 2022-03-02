
<script>

import { current } from "../store/common.js"
  
export let tree;

const _expansionState = {

}

$:name = tree.name;
$:children = tree.children;

let expanded = _expansionState[name] || false;
const toggleExpansion = () => {
    expanded = _expansionState[name] = !expanded;
}


function selectFile (name){
 // $current.target = 'CT/bytes'
  $current.name = name
}

</script>

<ul><!-- transition:slide -->
  <li>
    {#if children}
      <span >

        <span class="arrow fa-solid fa-folder" on:click={toggleExpansion}></span>
        <span on:click={()=>{selectFile(name)}}>{name}</span>
      </span>
      {#if expanded}
        {#each children as child}
          <svelte:self tree={child} />
        {/each}
      {/if}
    {:else}
      <span>
        <span class="no-arrow fa-solid fa-file"/>
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