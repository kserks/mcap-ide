<script>
import { onMount } from 'svelte';
import Tree from './components/Tree.svelte';

import { current, root, showVideoPlayer } from './store/common.js';
//import readDir from './methods/read-dir.js';
import Editor from './components/Editor.svelte';
import Editor_2 from './components/Editor_2.svelte';
import MakeFile from './components/MakeFile.svelte';
import Controls from './components/Controls.svelte';
import VideoPlayer from './components/VideoPlayer.svelte';

import listToTree from './utils/list-to-tree.js';
import * as fs from './methods/fs.js';


/**
 * force update
 * Перерисовка компонента
 * Скрываем и показываем его снова
 */

let operator = false;
let visible = true;
function forceUpdate() {
  visible = false;
  setTimeout(()=>{visible = true}, 0)
}

/**
 * read dir
 */

/**
 * @props tree
 */
let tree = {};

async function readDir (dirName, pathname){
	/**
	 * Нам требуется как путь к директории для чтения
	 * так и последняя директория этого пути.
	 */
	let dir;
	if(pathname===''){
		dir = dirName;
	}
	else{
		dir = dirName +'/'+ pathname;

	}
	let lastPathChunk = dir.split('/').pop();

	let res = await fs.readDir(dir);

	/**
	 * Добавляем свойство children к каждому элементу массива
	 * Это требуется для функции listToTree
	 */
	res = JSON.parse(res.data).map(i=>{
						i.children = [];
						return i;
				});

	const children = listToTree(res, lastPathChunk);

	tree = { 
		name: lastPathChunk, 
		isDir: true, 
		path: '', 
		children 
	}	

}
/**
 * Директории
 */
const clientDirs = [ 
	{ name: 'CT', active: false }, 
	{ name: 'AM', active: false }, 
	{ name: 'WDS', active: false }, 
	{ name: 'CCT', active: false },
];

const serverDirs = [ 
	{ name: 'MC', active: false }, 
	{ name: 'SRV', active: false }, 
	{ name: 'WOL', active: false }, 
	{ name: 'WEB', active: false },
	{ name: 'NJS', active: false },
];



function resetSelectedDir(index){
	tree = { name: '.', children: [], isDir: true, path: ''}
	$current.path = '';
	$root = '';
	/**
	 * Пробегаемся по массиву с папками и сбрасываем active
	 * что бы снять выделение и предыдущей выбранной папки
	 */
	clientDirs.map((dir, i)=>{
				clientDirs[i].active = false;
	})
	/**
	 * Перерисовываем компонент, что бы открытые папки закрылись
	 */
	forceUpdate();	
}





function selectDir(dirName, index){
	resetSelectedDir(index);
	// выделяем цветом активную папку
	clientDirs[index].active = true;
	$current.target = dirName;
	if($current.target==='CCT') return;
	
	readDir($current.target, $root);
	$current.id = '';
	/**
	 * Навешиваем обработчик кликов на файлы
	 * Делается это для того, что бы подсветить цветом выбранный файл
	 * Это нельзя сделать в компоненте Tree из за того, что он создает сам себя
	 * если у него есть дочерние элементы. Т.е. каждый узел, это компонент Tree 
	 * setTimeout - нужен вкачестве задержки, пока дерево не нарисуется. Потом
	 * навешивается слушатель событий.
	 */
	setTimeout(initSelectionActiveFile, 200);
}




</script>

<main>

	<div class="content-wrapper">
			<aside class="file-system">

					<div class="file-system__dirs">
							{#each clientDirs as dir, index}
									<div class="file-system__dirs-item {dir.active?'active-dir':''}" on:mousedown={()=>{selectDir(dir.name, index)}}>{dir.name}</div>
							{/each}
					</div>
					{#if operator}
					<div class="file-system__dirs">
							{#each serverDirs as dir, index}	
									<div class="file-system__dirs-item {dir.active?'active-dir':''}" on:mousedown={()=>{selectDir(dir.name, index)}}>{dir.name}</div>
							{/each}
					</div>
					{/if}
					<MakeFile on:makeFile={ readDir($current.target, $root) } on:selectTarget={readDir($current.target, $root)}/>
					<div class="file-system__tree">
							{#if visible}
									<Tree {tree}/>
							{/if}
					</div>
					<Controls on:controlChange={ readDir($current.target, $root) }/>
			</aside>
			<!--editor-->
			<div class="file-viewer {$showVideoPlayer?'video-player-show':''}">
					<VideoPlayer/>
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
	background-color: #272822;
	width: 1150px;
	height: 800px;
	/*padding: 20px;*/
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
	display: flex;
	flex-direction: column;
	padding: 5px;
}



.file-system__tree{
	display: flex;
	flex: 1;
	overflow: auto;
}


/**
 * FILE VIEWER
 */
.file-viewer{
	width: 75%;
	height: 100%;
	background-color: #2F3129;
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
	overflow: auto;
	margin-top: 5px;
	position: relative;
}

.active-dir{
	background-color: rgba(0,0,0,0.1);
	color: #66D9EF;
}


</style>