<script>

import { current, focusEditor  } from '../store/common.js';
import saveFile from '../methods/save-file.js';
import { openFile, updateMode } from "../methods/open-file.js";
import * as fs from '../methods/fs.js';
import { createEventDispatcher } from 'svelte'
import copyToClipboard from '../methods/copy-to-clipboard.js';

const emit = createEventDispatcher();


function save (){
    saveFile({
          "target": $current.target,
          "id": $current.id,
          "path": $current.path,
          "name": $current.name,
          "data": window.editor.getValue()
    });
}

let showInput = false;
let newName = '';

function rename (){
    if($current.name==="*.*") return;
    showInput = !showInput;
    newName = $current.name;
}

async function saveNewName (){
  if(newName!==$current.name){
    try{
      await fs.rename({
                "target": $current.target,
                "id":  $current.id,
                "path": $current.path,
                "name": $current.name,
                "data": newName
            });
      emit('readDir');
      //openFile(editor, $current)
    }
    catch(e){
      alert(e)
    }


  }
  showInput = false;
}


function del (){
  if($current.name!=='*.*'){
      fs.remove({
            "target": $current.target,
            "id":  $current.id,
            "path": $current.path,
            "name": $current.name,
            "data": ""
      });
      emit('readDir');
      editor.setValue('');
      editor_2.setValue('');
  }
}

function open (){
  openFile(editor_2, $current);
}
/**
 * COPY
 */
let clipBoardContainer = null;
function copy() {
  let data;
  if($focusEditor){
      data = editor_2.getSelectedText();
  }
  else{
      data = editor.getSelectedText();
  }

  clipBoardContainer.value = data;
  copyToClipboard(clipBoardContainer);

}
/**
 * PASTE
 */
function paste (){
  const cursorPosition = editor.getCursorPosition();
  editor.session.insert(cursorPosition, clipBoardContainer.value);
}


</script>

<div>
  <!--скрытые формы ввода-->
  <div class="input-wrapper  { showInput?'show':'' }">
      <input type="text" bind:value={newName}>
      <i class="fa-solid fa-floppy-disk"  on:click={saveNewName}></i>
  </div>

  <!--кнопки-->
  <div class="file-system__dirs">
      <div class="file-system__dirs-item" on:click={save}><i class="fa-solid fa-floppy-disk"></i></div>
      <div class="file-system__dirs-item" on:click={open}><i class="fa-solid fa-eye"></i></div>
      <div class="file-system__dirs-item" on:click={rename}><i class="fa-solid fa-file-signature"></i></div>
      <div class="file-system__dirs-item" on:click={del}><i class="fa-solid fa-trash-can"></i></div>
      <div class="file-system__dirs-item" on:click={copy}><i class="fa-solid fa-copy"></i></div>
      <div class="file-system__dirs-item" on:click={paste}><i class="fa-solid fa-paste"></i></div>

  </div>
  <textarea style="display: none;" type="text" name="" bind:this={clipBoardContainer}></textarea>
</div>



<style scoped>


.input-wrapper{
  margin-bottom: 7px;
  display: none;
}
.show{
  display: block;
}
.input-wrapper input{
  width: 90%;
}
.input-wrapper i{
  margin-left: 5px;
}
.input-wrapper i:hover{
  cursor: pointer;
  color: lightgreen;
}

.file-system__dirs-item{
  width: 35px;
}
</style>