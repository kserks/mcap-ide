<script>
import { ui } from '../store/common.js';

/**
 * set Video
 * webm || ogg
 */


let videoSource = '';

function setVideo (){
  if(videoSource===''){
    $ui.showVideoPlayer = false;
    return;
  }
  $ui.showVideoPlayer = true;
 
  player.src(videoSource);

  player.on('error', function() {


    $ui.showVideoPlayer = false;
    
    //$ui.showVideoPlayer = true;
  });
}


function splitVideo (){

  $ui.splitVideoScreen = !$ui.splitVideoScreen;
}


</script>


<div class="input-wrapper vjs-set-video">
      <input type="text" bind:value={videoSource} placeholder=".webm | .ogg">
      <div class=" file-system__dirs-item" on:click={setVideo}>
          <i class="fa-solid fa-angle-right"></i>
      </div>
      <div class="file-system__dirs-item" on:click={splitVideo}>
          <i class="fa-solid fa-adjust" ></i>
      </div>  
</div>

<style scoped>

.fa-adjust{
  transform: rotate(180deg);
  opacity: 0.7;
}


</style>