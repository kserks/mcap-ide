
<script>
import openFile from "../methods/open-file.js";
import { current } from "../store/common.js";
//import { onMount } from "svelte";

  
export let tree;

const _expansionState = {

}

$:name = tree.name;
$:children = tree.children;
$:isDir = tree.isDir;


let expanded = _expansionState[name] || false;
const toggleExpansion = () => {
    expanded = _expansionState[name] = !expanded;
    $current.path = pathNormalize (tree.path)
}


function pathNormalize (path){
  return path.split(/\\{1,}/g)
             .join('/')
             .replace('/'+$current.name, '')
             .replace('ide/', '')
             .replace(`${$current.target}`, '')
             .replace(/^\//g, '');

}

function selectFile (name){

  $current.name = name;
  /**
   * Убираю лишние части пути, что бы получить валидный путь для модуля mcef.Query
   */
  $current.path = pathNormalize (tree.path)

  // console.log($current.name)
  
  openFile(editor, $current);
}


</script>



{#if children }
    <ul id="tree_files">
      <li>
        {#if isDir }
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
            <span class="file-item">{name}</span>
          </span>
        {/if}
      </li>
    </ul>

{/if}


<style>

ul {
    margin: 0;
    list-style: none;
    padding-left: 1.2rem; 
    user-select: none;

}
.no-arrow {
  /*padding-left: 1.0rem;*/

}
.arrow {
    cursor: pointer;
    display: inline-block;
    color: #667;
}
ul li{
  margin: 0;
  padding: 0;
}
ul li >span:hover{
  color: #66D9EF;
  cursor: pointer;
}
.file-item{
  
}
.active-item{
  color: red;
}

</style>