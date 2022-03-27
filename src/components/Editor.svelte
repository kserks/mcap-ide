<script>
import { current,  language } from "../store/common.js"
import { onMount } from 'svelte';
import * as fs from '../methods/fs.js';
//import extMap from '../utils/ext-map.js';

import saveFile from '../methods/save-file.js';






onMount(()=>{

  let editor = ace.edit("editor", { selectionStyle: "text" });
  window.editor = editor;
  editor.setTheme("ace/theme/monokai");
  editor.setFontSize(18);
  editor.setShowPrintMargin(false);
  editor.setOption("displayIndentGuides", false);
  editor.getSession().setMode(`ace/mode/text`)

})



</script>

<div id="editor"></div>

<style scoped>
#editor{
 /* position: absolute;
  top: 0;
  left: 0;*/
  width: 100%;
  height: 100%;
}
</style>