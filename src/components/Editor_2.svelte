<script>
import { current } from "../store/common.js"
import { onMount } from 'svelte';

$:language = 'javascript';

let str = `
const arr = [ { name: 'Василий' }, { name: 'Анна'} ];

for(let i=0;i<list.length;i++){
  console.log(list[i].name);
}
`

onMount(()=>{

  let editor = ace.edit("editor_2", { selectionStyle: "text" });
  editor.setTheme("ace/theme/monokai");
  editor.setFontSize(18);
  editor.setShowPrintMargin(false);
  editor.setOption("displayIndentGuides", false);
  editor.getSession().setMode(`ace/mode/${language}`);
  editor.setValue(str); 
})
</script>

<div id="editor_2"></div>

<style scoped>
#editor_2{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>