<script>
import { showVideoPlayer, splitVideoScreen } from '../store/common.js';

/**
 * set Video
 * webm || ogg
 */


let videoSource = '';

function setVideo (){
  if(videoSource===''){
    $showVideoPlayer = false;
    return;
  }
  $showVideoPlayer = true;
 
  player.src(videoSource);

  player.on('error', function() {
    videoSource = '';
  });

}


function splitVideo (){

  $splitVideoScreen = !$splitVideoScreen;
}


</script>


<div class="input-wrapper vjs-set-video">
      <input type="text" bind:value={videoSource} placeholder=".webm | .ogg">
      <div class=" file-system__dirs-item">
          <i class="fa-solid fa-angle-right"  on:click={setVideo}></i>
      </div>
      <div class="file-system__dirs-item">
          <i class="fa-solid fa-adjust"  on:click={splitVideo}></i>
      </div>  
</div>

<style scoped>

.fa-adjust{
  transform: rotate(180deg);
  opacity: 0.7;
}


</style>