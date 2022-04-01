
<script>
import { openFile } from "../methods/open-file.js";
import { current } from "../store/common.js";
import normalizePath from '../methods/normalize-path.js';


export let tree;
$:name = tree.name;
$:children = tree.children;
$:isDir = tree.isDir;


const _expansionState = {};

let expanded = _expansionState[name] || false;
function toggleExpansion() {
    expanded = _expansionState[name] = !expanded;
    // ?? эта штука не очень то и работает вроде
    // когда кликаю по каталагу он текущим не становится
    // и если создать файл, то он его создат в предыдущем текущем каталоге.
    // текущий каталог задается только тогда, когда я выберу в нем файл
    $current.path = normalizePath(tree.path, $current);

}

function selectFile (name){
  
  $current.name = name;
  /**
   * Убираю лишние части пути, что бы получить валидный путь для модуля mcef.Query
   */
  $current.path = normalizePath(tree.path, $current);

  openFile(editor, $current);
}


</script>



{#if children }
    <ul id="tree_files">
      <li>
        {#if isDir }
          <span  on:click={toggleExpansion}>

            <span class="arrow fa-solid fa-folder"></span>
            <span class="dir-item">{name}</span>
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

.arrow {
    cursor: pointer;
    display: inline-block;
    color: #667;
}
ul li{
  margin: 0;
  padding: 0;
}
ul li .dir-item:hover,
ul li .file-item:hover{
  color: #66D9EF;
  cursor: pointer;
}

</style>