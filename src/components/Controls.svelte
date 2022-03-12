<script>

import { current } from '../store/common.js';
import saveFile from '../methods/save-file.js';


function save (){
    saveFile({
          "target": $current.target,
          "id": $current.id,
          "path": "%ID%",
          "name": $current.name,
          "data": window.editor.getValue()
    });
}

</script>

<div class="file-system__dirs">
              <div class="file-system__dirs-item"><i class="fa-solid fa-eye"></i></div>
              <div class="file-system__dirs-item"><i class="fa-solid fa-pen"></i></div>
              <div class="file-system__dirs-item" on:click={save}><i class="fa-solid fa-floppy-disk"></i></div>
              <div class="file-system__dirs-item"><i class="fa-solid fa-file-signature"></i></div>
              <div class="file-system__dirs-item"><i class="fa-solid fa-trash-can"></i></div>
</div>

<style scoped>


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