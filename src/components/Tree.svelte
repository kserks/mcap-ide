
<script>

import { current } from "../store/common.js"
  
export let tree;

const _expansionState = {

}

$:name = tree.name;
$:children = tree.children;

let expanded = _expansionState[name] || false;
const toggleExpansion = () => {
  
    //document.querySelectorAll('')
    expanded = _expansionState[name] = !expanded;

    // active-item
}

function removeSelection (){
 // active = false
}

function selectFile (name){
 // removeSelection ()
  $current.name = name
  //active = true
}


</script>

<ul>
  <li>
    {#if children }
      <span  on:click={toggleExpansion}>

        <span class="arrow fa-solid fa-folder"></span>
        <span class="file-item">{name}</span>
      </span>
      {#if expanded}
        {#each children as child}
          <svelte:self tree={child} />
        {/each}
      {/if}
    {:else}
      <span  on:click={()=>{selectFile(name)}} >
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
.active-item{
  color: red;
}
</style>