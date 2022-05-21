<script>
import { current, focusEditor } from "../store/common.js"
import { onMount } from 'svelte';


onMount(()=>{

  let editor = ace.edit("editor_2", { selectionStyle: "text" });
  editor.setTheme("ace/theme/monokai");
  editor.setFontSize(18);
  editor.setShowPrintMargin(false);
  editor.setOption("displayIndentGuides", false);
  editor.getSession();
  editor.session.setMode("ace/mode/text");
  editor.setReadOnly(true);
  window.editor_2 = editor;
});
</script>

<div id="editor_2" on:click={()=>{$focusEditor = !$focusEditor}}></div>

<style scoped>
#editor_2{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

}

</style>