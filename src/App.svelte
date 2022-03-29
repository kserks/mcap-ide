<script>
import { onMount } from 'svelte';
import Tree from './components/Tree.svelte';
import listToTree from './utils/list-to-tree.js';
import { current, root } from './store/common.js';
import * as fs from './methods/fs.js';
import Editor from './components/Editor.svelte';
import Editor_2 from './components/Editor_2.svelte';
import MakeFile from './components/MakeFile.svelte';
import Controls from './components/Controls.svelte';




const theme = {
	'theme-bg': '#272822'
}	

$:css = Object.entries(theme)
						.map(([key, value]) => `--${key}:${value}`)
						.join(';');
/**
 * 
 */


let tree = {}
async function readDir (dirName){
	let dir;
	if($root===''){
		dir = dirName;
	}
	else{
		dir = dirName +'/'+ $root;

	}
	let lastPathChunk = dir.split('/').pop();

	var res = await fs.readDir(dir);

	res = JSON.parse(res.data).map(i=>{
		
		if(i.parent===lastPathChunk) i.parent = 0;
		return i;
	});
	let tr = listToTree(res);
	tree = {name: lastPathChunk, isDir: true, path: '', children: tr}	
}



function selectDir(dirName){
	$current.target = dirName;
	if($current.target==='CCT'){

		readDir($current.target);
	}
	else{
		readDir($current.target);
	}
	

}


let operator = false;
</script>

<main  style="{css}">
	<div class="content-wrapper">
			<aside class="file-system">

					<div class="file-system__dirs">
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('CT')}}>CT</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('AM')}}>AM</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WDS')}}>WDS</div>
							<div class="file-system__dirs-item cct" style="width: 112px;" on:mousedown={()=>{selectDir('CCT')}}><span style="padding-right: 10px;">CCT</span><input type="text" placeholder="id" bind:value={$current.id}/></div>
					</div>
					{#if operator}
					<div class="file-system__dirs">
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('MC')}}>MC</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('SRV')}}>SRV</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WOL')}}>WOL</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WEB')}}>WEB</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('NJS')}}>NJS</div>
					</div>
					{/if}
					<MakeFile on:makeFile={readDir($current.target)} on:selectTarget={readDir($current.target)}/>
					<div class="file-system__tree">
							<Tree {tree}/>
					</div>
					<Controls on:controlChange={readDir($current.target)}/>
			</aside>
			<!--editor-->
			<div class="file-viewer">
					<Editor/>
			</div>

	</div>
	<div class="bottom-file-viewer">
			<Editor_2/>
	</div>
</main>

<style scoped>

main{
	color: #8F908A;
	background-color: #2F3129;
	width: 100vw;
	height: 100vh;
	padding: 20px;
/*
	width: 1024px;
	height: 750px;
*/
	box-shadow: 3px 3px 3px rgba(0,0,0,0.1);
}
.content-wrapper{
	display: flex;
	height: 70%;
	width: 100%;
}
/**
 * FS
 */
.file-system{
	width: 25%;
	height: 100%;
	background-color: var(--theme-bg);
	display: flex;
	flex-direction: column;
	padding: 5px;
}
/*
.file-system__dirs.operator{

}*/


.file-system__dirs-item.cct{
	width: 112px;
}
.file-system__dirs-item.cct span{
	padding-right: 10px;
}
.file-system__dirs-item.cct input{
	width: 60px;
	height: 25px;
  text-align: center;
}

.file-system__tree{
	display: flex;
	flex-direction: #66D9EF;
	flex: 1;
	overflow: auto;
}


/**
 * FILE VIEWER
 */
.file-viewer{
	width: 75%;
	height: 100%;
	background-color: var(--theme-bg);
	position: relative;
}

.content-wrapper{
	border: 1px solid #222;
}

/**
 * BOTTOM
 */

.bottom-file-viewer{
	border: 1px solid #222;
	height: 30%;
	width: 100%;
	background-color: var(--theme-bg);
	overflow: auto;
	margin-top: 5px;
	position: relative;
}



</style>