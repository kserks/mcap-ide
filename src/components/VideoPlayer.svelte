<script>
import { ui } from '../store/common.js';
import { onMount } from 'svelte';
import SetVideo from './SetVideo.svelte';

onMount(()=>{

let options = {
  responsive: true,
  controls: true,
  autoplay: false,
  preload: 'auto'
};



window.player = videojs('video-player', options);


})


</script>

<div class="video-wrapper {$ui.splitVideoScreen?'split-video-screen':''}">
  <video id="video-player" class="video-js">

  </video>
  <SetVideo/>
</div>

<style>

.video-wrapper{
  position: absolute;
  left: 43px;
  top: 0;
  width: 820px;
  height: 100%;
  /*display: none;*/
  display: block;
}

.video-js{
  width: 100%;
  height: 100%;
}
.split-video-screen{
  width: 50%;
  right: 0;
  left: unset;
}
</style>