<script>

import { current, showVideoPlayer } from '../store/common.js';
import saveFile from '../methods/save-file.js';
import { openFile, updateMode } from "../methods/open-file.js";
import * as fs from '../methods/fs.js';
import { createEventDispatcher } from 'svelte'


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
      emit('controlChange');
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
      emit('controlChange');
      editor.setValue('');
      editor_2.setValue('');
  }
}

function open (){
  openFile(editor_2, $current);
}

/**
 * set Video
 * webm || ogg
 */

let videoOpen = false;
let videoSource = '';
function openVideo (){
  videoOpen = !videoOpen;
}
function setVideo (){
  if(videoSource===''){
    $showVideoPlayer = false;
    openVideo = false;
    return;
  }
  $showVideoPlayer = true;
  player.src(videoSource);
  videoOpen = false;
}
</script>

<div>
  <!--скрытые формы ввода-->
  <div class="input-wrapper  { showInput?'show':'' }">
      <input type="text" bind:value={newName}>
      <i class="fa-solid fa-floppy-disk"  on:click={saveNewName}></i>
  </div>
  <div class="input-wrapper  { videoOpen?'show':'' }">
      <input type="text" bind:value={videoSource}>
      <i class="fa-solid fa-floppy-disk"  on:click={setVideo}></i>
  </div>
  <!--кнопки-->
  <div class="file-system__dirs">
      <div class="file-system__dirs-item" on:click={save}><i class="fa-solid fa-floppy-disk"></i></div>
      <div class="file-system__dirs-item" on:click={open}><i class="fa-solid fa-eye"></i></div>
      <div class="file-system__dirs-item" on:click={openVideo}><i class="fa-solid fa-film"></i></div>
      <div class="file-system__dirs-item" on:click={rename}><i class="fa-solid fa-file-signature"></i></div>
      <div class="file-system__dirs-item" on:click={del}><i class="fa-solid fa-trash-can"></i></div>
  </div>
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
  background-color: #2F3129;
  box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.2);
  padding: 3px 5px;
  user-select: none;
  cursor: pointer;
  border-radius: 4px;
  min-width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
}
.file-system__dirs-item:hover{
  background-color: rgba(0,0,0,0.1);
  color: #66D9EF;
}
</style>