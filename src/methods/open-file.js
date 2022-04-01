import extMap from '../utils/ext-map.js';
import { current,  language } from "../store/common.js";
import * as fs from './fs.js';


//language.subscribe(val=>val=lang);


export function openFile (editorInstance, ctx){

    
      if(ctx.name!=='*.*'){
              updateMode (editorInstance, ctx);
              fs.readFile(ctx)
                  .then(fileBody=>{
                      editorInstance.setValue(fileBody.data);
                      editorInstance.clearSelection(); 
                      editorInstance.getSession().setScrollTop(0);
                  })
                  .catch(e=>console.error(e))
       }
}

export function updateMode (editorInstance, ctx){
    let lang = 'text';
    let ext = ctx.name.split('.').pop();
    if(ext.length>1){
        lang = extMap[ ext ];
    }
    else{
      lang = 'text';
    }
    editorInstance.getSession().setMode(`ace/mode/${lang}`);


}