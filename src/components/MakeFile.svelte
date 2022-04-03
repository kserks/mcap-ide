<script>
import { current, root } from '../store/common.js';
import * as fs from '../methods/fs.js';
import { createEventDispatcher } from 'svelte'

const emit = createEventDispatcher();


let fileName = '';
let dirName = '';
let cct_id = '';
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


function apply (){
  if($current.target==='') return;

  if(fileName===''&&dirName!==''){
      if($current.id!==''){
        $root = $current.id+'/'+dirName;
      }
      else{
        $root = dirName;
      }
      dirName = '';
      emit('selectTarget');
  }
  if(fileName!==''){
    createFile();
    dirName = '';
  }
}




function selectDirCCT(){
      
      // если id комньютера не цифра, то ничего не делаем
      if(!/\d+/g.test($current.id)) return;


      $root = $current.id
      emit('selectTarget');

}
</script>

<div class="file-system__dirs make-file">
    <input type="text" class="file-system__id" placeholder="id" bind:value={$current.id} on:keyup={selectDirCCT}/>
    <input type="text" class="file-system__root"  placeholder="root/" bind:value={dirName} />
    <input type="text" class="file-system__file" bind:value={fileName} placeholder="new.txt" />
    <i class="file-system__dirs-item fa-solid fa-plus" on:mousedown={apply}></i>
</div>

<style scoped>
.file-system__dirs{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}


/**
 * input
 */
.file-system__id{
  width: 65px;
  text-align: center;
}
.file-system__root{
  width: 65px;
  text-align: center;
}
.file-system__file{
  width: 65px;
  text-align: center;

}

.file-system__dirs-item:hover{
  background-color: rgba(0,0,0,0.1);
  color: #66D9EF;

}
</style>