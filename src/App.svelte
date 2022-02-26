<script>
import { onMount } from 'svelte';
import Tree from './components/Tree.svelte';

const theme = {
	'theme-bg': '#272822'
}	

$:css = Object.entries(theme)
						.map(([key, value]) => `--${key}:${value}`)
						.join(';');
/**
 * 
 */
const tree = {
		label: "NJS", children: [
			{ label: "src", children: [
				{ label: "static.txt"},
				{ label: "plugins", children: [
					{ 
						label: "dialog-box",
						children: [
								{ label: "index.js"},
								{ label: "style.css"},
								{ label: "tpl.html"},
						]
					},
					{ 
						label: "wiki",
						children: [
								{ label: "index.js"},
								{ label: "style.css"},
								{ label: "tpl.html"},
						]
					},
					{ 
						label: "status-bar",
						children: [
								{ label: "index.js"},
								{ label: "style.css"},
								{ label: "tpl.html"},
						]
					},
				]},
				{ label: "file-name.txt"},
			]},
			{ label: "public", children: [
				{ label: "index.html" },
				{ label: "style.css" },
				{ 
					label: "lib", 
					children: [
							{ label: "jquery.min.js" },
							{ label: "p5.js" },
							{ label: "undescore.js" },
							{ label: "module-a3s80sd93j.js" },
					]
				},
			]},
		],
}

$:language = 'js'

onMount(()=>{

	let editor = ace.edit("editor", { selectionStyle: "text" }); 
	editor.setTheme("ace/theme/monokai");
	editor.setFontSize(18);
	editor.setShowPrintMargin(false);
	editor.setOption("displayIndentGuides", false);
	editor.getSession().setMode("ace/mode/javascript");
let str = `
const arr = [ { name: 'Василий' }, { name: 'Анна'} ];

for(let i=0;i<list.length;i++){
	console.log(list[i].name);
}

function test (req, res){
	res.sendStatus(200);
}
`
   editor.setValue(str)              
//editor.getValue();
/**
 * @@@@@@@@@@@@2222222222222222
 */
	let editor2 = ace.edit("editor2", { selectionStyle: "text" }); 
	editor2.setTheme("ace/theme/monokai");
	editor2.setFontSize(18);
	editor2.setShowPrintMargin(false);
	editor2.setOption("displayIndentGuides", false);
	editor2.getSession().setMode("ace/mode/javascript");
let str2 = `
const arr = [ { name: 'Василий' }, { name: 'Анна'} ];

for(let i=0;i<list.length;i++){
	console.log(list[i].name);
}

`
   editor2.setValue(str2)   


})

</script>

<main  style="{css}">
	<div class="content-wrapper">
			<aside class="file-system">
					<div class="file-system__dirs">
							<div class="file-system__dirs-item">CT</div>
							<div class="file-system__dirs-item">AM</div>
							<div class="file-system__dirs-item">WDS</div>
							<div class="file-system__dirs-item cct" style="width: 112px;"><span style="padding-right: 10px;">CCT</span><input type="text" placeholder="id"/></div>
					</div>
					<div class="file-system__dirs .operator">
							<div class="file-system__dirs-item">MC</div>
							<div class="file-system__dirs-item">SRV</div>
							<div class="file-system__dirs-item">WOL</div>
							<div class="file-system__dirs-item">WEB</div>
							<div class="file-system__dirs-item">NJS</div>
					</div>
					<div class="file-system__dirs make-file">
							<input type="text" class="file-system__path" /><i class="file-system__dirs-item fa-solid fa-plus"></i>
					</div>
					<div class="file-system__tree">
							<Tree {tree} />
					</div>
					<div class="file-system__dirs">
							<div class="file-system__dirs-item"><i class="fa-solid fa-eye"></i></div>
							<div class="file-system__dirs-item"><i class="fa-solid fa-pen"></i></div>
							<div class="file-system__dirs-item"><i class="fa-solid fa-floppy-disk"></i></div>
							<div class="file-system__dirs-item"><i class="fa-solid fa-file-signature"></i></div>
							<div class="file-system__dirs-item"><i class="fa-solid fa-trash-can"></i></div>
					</div>
			</aside>
			<!--editor-->
			<div class="file-viewer">
					<div id="editor"></div>
			</div>

	</div>
	<div class="buttom-file-viewer">
		<div id="editor2"></div>
	</div>
</main>

<style>
input[type="text"]{
	padding: 3px 5px;
	background-color: rgba(255,255,255,0.1);
	height: 30px;
	caret-color: #F92672;
	color: #66D9EF;
}
main{
	color: #8F908A;
	background-color: #2F3129;
	/*
	width: 100vw;
	height: 100vh;
	*/
	width: 1024px;
	height: 728px;
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
.file-system__dirs{
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 5px;
}
.file-system__dirs.operator{

}

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
 * input
 */

.file-system__path{
	width: 235px;
}

/**
 * FILE VIEWER
 */
.file-viewer{
	width: 70%;
	height: 100%;
	background-color: var(--theme-bg);
}
#editor{
	width: 100%;
	height: 100%;
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

#editor2{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
}


</style>