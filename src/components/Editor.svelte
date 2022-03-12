<script>
import { current } from "../store/common.js"
import { onMount } from 'svelte';
import * as fs from '../methods/fs.js';
import extMap from '../utils/ext-map.js';

import saveFile from '../methods/save-file.js';


$:language = 'javascript';



onMount(()=>{

  let editor = ace.edit("editor", { selectionStyle: "text" });
  window.editor = editor;
  editor.setTheme("ace/theme/monokai");
  editor.setFontSize(18);
  editor.setShowPrintMargin(false);
  editor.setOption("displayIndentGuides", false);



  current.subscribe(ctx=>{

      if(ctx.name!=='*.*'){
          let ext = ctx.name.split('.');
          if(ext.length>1){
              language = extMap[ ext.pop() ]
          }
          else{
            language = 'text'
          }

            editor.getSession().setMode(`ace/mode/${language}`);
              fs.readFile(ctx)
                  .then(fileBody=>{
                      editor.setValue(fileBody.data);
                      editor.clearSelection(); 
                      editor.getSession().setScrollTop(0);
                  })
                  .catch(e=>{
                    console.error(e)
                  })


       }
       
      
  })


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