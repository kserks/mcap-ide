<script>
import { onMount } from 'svelte';
import Tree from './components/Tree.svelte';
import listToTree from './utils/list-to-tree.js';
import { current } from './store/common.js';
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

	var res = await fs.readDir(dirName);


	res = JSON.parse(res.data).map(i=>{
		if(i.parent===dirName) i.parent = 0;
		return i;
	});

	let tr = listToTree(res);
	tree = {name: dirName, children: tr}	
}

function selectDir(dirName){
	$current.target = dirName;
	$current.id = '';

	readDir($current.target);
}
selectDir('CT');


</script>

<main  style="{css}">
	<div class="content-wrapper">
			<aside class="file-system">

					<div class="file-system__dirs">
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('CT')}}>CT</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('AM')}}>AM</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WDS')}}>WDS</div>
							<div class="file-system__dirs-item cct" style="width: 112px;" on:mousedown={()=>{selectDir('CCT')}}><span style="padding-right: 10px;">CCT</span><input type="text" placeholder="id"/></div>
					</div>
					<div class="file-system__dirs .operator">
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('MC')}}>MC</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('SRV')}}>SRV</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WOL')}}>WOL</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('WEB')}}>WEB</div>
							<div class="file-system__dirs-item" on:mousedown={()=>{selectDir('NJS')}}>NJS</div>
					</div>
		
					<MakeFile on:MakeFile={readDir($current.target)}/>
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
	<div class="buttom-file-viewer">
			<Editor_2/>
	</div>
</main>

<style scoped>

main{
	color: #8F908A;
	background-color: #2F3129;
	/*
	width: 100vw;
	height: 100vh;
	*/
	width: 1024px;
	height: 750px;
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
	width: 30%;
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
	width: 70%;
	height: 100%;
	background-color: var(--theme-bg);
	position: relative;

}


/**
 * BOTTON
 */

.buttom-file-viewer{
	height: 30%;
	width: 100%;
	background-color: var(--theme-bg);
	overflow: auto;
	margin-top: 5px;
	position: relative;
}



</style>