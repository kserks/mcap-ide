<script>
//import Aside from './components/Aside.svelte'
/*
const dirs = [
  { name: 'CT', active: false, type: 'player' },
  { name: 'AM', active: false, type: 'player' },
  { name: 'WDS', active: false, type: 'player' },
  { name: 'CTT', active: false, type: 'player' },
  { name: 'MC', active: false, type: 'server' },
  { name: 'SRV', active: false, type: 'server' },
  { name: 'WOL', active: false, type: 'server' },
  { name: 'WEB', active: false, type: 'server' },
  { name: 'NJS', active: false, type: 'server' },
]

$:serverDirs = dirs.filter(item=>item.type==='server');
*/
</script>

<div class="component">
          <div class="file-system__dirs">
              <div class="file-system__dirs-item" on:mousedown={()=>{selectDir('CT')}}>CT</div>
              <div class="file-system__dirs-item" on:mousedown={()=>{selectDir('AM')}}>AM</div>
              <div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WDS')}}>WDS</div>
              <div class="file-system__dirs-item cct" style="width: 112px;" on:mousedown={()=>{selectDir('CCT')}}><span style="padding-right: 10px;">CCT</span><input type="text" placeholder="id"/></div>
          </div>
          <div class="file-system__dirs .operator">
              {#each serverDirs as item}
                  <div class="file-system__dirs-item" on:mousedown={()=>{selectDir(item)}}>{item.name}</div>
              {/each}

          </div>

</div>

<style scoped>

</style>