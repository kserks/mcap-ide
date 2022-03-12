<script>
import { current } from '../store/common.js';
import * as fs from '../methods/fs.js';
import { createEventDispatcher } from 'svelte'

const emit = createEventDispatcher();

let dirName = '';
let fileName = '';

async function MakeFile(){

  if($current.target){
    try{
      let res = await fs.writeFile({
                            "target": $current.target,
                            "id": "",
                            "path": dirName,
                            "name": fileName,
                            "data": ""
                      });
      dirName = '';
      fileName = '';
      emit('MakeFile');
    }
    catch (err){
      alert(err)
    }
    //  console.log(res)
  }

}



</script>

<div class="file-system__dirs make-file">
    <input type="text" class="file-system__path" placeholder="dir" bind:value={dirName} />
    <input type="text" class="file-system__file" placeholder="*.*" bind:value={fileName} />
    <i class="file-system__dirs-item fa-solid fa-plus" on:mousedown={MakeFile}></i>
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

.file-system__path{
  width: 150px;
}
.file-system__file{
  width: 80px;
  text-align: center;
}

.file-system__dirs-item:hover{
  background-color: rgba(0,0,0,0.1);
  color: #66D9EF;

}
</style>