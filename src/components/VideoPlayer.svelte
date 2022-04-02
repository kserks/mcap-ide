<script>

import { onMount } from 'svelte';


onMount(()=>{

let options = {
  responsive: true,
  controls: true,
  autoplay: false,
  preload: 'auto'
};



window.player = videojs('video-player', options);

//player.src('../video/oceans.webm');

})


</script>

<div class="video-wrapper">
  <video id="video-player" class="video-js"></video>
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

</style>