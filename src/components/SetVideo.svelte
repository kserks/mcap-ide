<script>
import { showVideoPlayer } from '../store/common.js';
/**
 * set Video
 * webm || ogg
 */


let videoSource = '';

function setVideo (){
  if(videoSource===''){
    $showVideoPlayer = false;
  }
  $showVideoPlayer = true;
 
  player.src(videoSource);
/*
  player.on('error', function() {
    alert(player.error())
  });
*/
}
</script>


<div class="input-wrapper vjs-set-video">
      <input type="text" bind:value={videoSource} placeholder=".webm | .ogg">
      <div class=" file-system__dirs-item">
          <i class="fa-solid fa-angle-right"  on:click={setVideo}></i>
      </div>
</div>

<style>



</style>