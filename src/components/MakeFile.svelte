<script>
import { current, root } from '../store/common.js';
import * as fs from '../methods/fs.js';
import { createEventDispatcher } from 'svelte'

const emit = createEventDispatcher();


let fileName = '';


async function createFile(){
  try{
      let res = await fs.writeFile({
                            "target": $current.target,
                            "id": "",
                            "path": $current.path,
                            "name": fileName,
                            "data": ""
                      });
      fileName = '';
      emit('makeFile');
  }
  catch (err){
      console.error(err);
  }
   
}

let dirName = '';
function add (){
  if($current.target==='') return;
  if(fileName===''&&dirName!==''){
      $root = dirName;
      dirName = '';
      emit('selectTarget')
  }
  else{
    createFile();
  }
}


</script>

<div class="file-system__dirs make-file">
    <input type="text" class="file-system__root" bind:value={dirName} />
    <input type="text" class="file-system__file" placeholder="{$current.name}" bind:value={fileName} />
    <i class="file-system__dirs-item fa-solid fa-plus" on:mousedown={add}></i>
</div>

<style scoped>
.file-system__dirs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
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
/**
 * input
 */

.file-system__root{
  width: 40%;
}
.file-system__file{
  width: 40%;

}

.file-system__dirs-item:hover{
  background-color: rgba(0,0,0,0.1);
  color: #66D9EF;

}
</style>