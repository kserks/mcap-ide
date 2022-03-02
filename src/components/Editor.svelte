<script>
import { current } from "../store/common.js"
import { onMount } from 'svelte';
import * as fs from '../methods/fs.js';

$:language = 'javascript';


onMount(()=>{

  let editor = ace.edit("editor", { selectionStyle: "text" });
  editor.setTheme("ace/theme/monokai");
  editor.setFontSize(18);
  editor.setShowPrintMargin(false);
  editor.setOption("displayIndentGuides", false);
  editor.getSession().setMode(`ace/mode/${language}`);



  current.subscribe(ctx=>{

      if(ctx.name!=='*.*'){

              ctx.id = ''

              fs.readFile(ctx)
                  .then(fileBody=>{

                      editor.setValue(fileBody.data);
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