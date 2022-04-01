<script>
import { current,  language } from "../store/common.js";
import { onMount } from 'svelte';
import * as fs from '../methods/fs.js';
import saveFile from '../methods/save-file.js';







onMount(()=>{

  const editor = ace.edit("editor", { selectionStyle: "text" });
  editor.setTheme("ace/theme/monokai");
  editor.setFontSize(18);
  editor.setShowPrintMargin(false);
  editor.setOption("displayIndentGuides", false);
  editor.getSession()
  editor.session.setMode("ace/mode/text");

  window.editor = editor;
})



</script>

<div id="editor"></div>

<style scoped="">
#editor{
  width: 100%;
  height: 100%;
}
</style>