import extMap from '../utils/ext-map.js';
import { current,  language } from "../store/common.js";
import * as fs from './fs.js';

let lang = 'text';
language.subscribe(val=>val=lang);


export default function (ctx){

    
      if(ctx.name!=='*.*'){
          let ext = ctx.name.split('.');
          if(ext.length>1){
              lang = extMap[ ext.pop() ]
          }
          else{
            lang = 'text'
          }

            editor.getSession().setMode(`ace/mode/${lang}`);
              
              fs.readFile(ctx)
                  .then(fileBody=>{

                      editor.setValue(fileBody.data);
                      editor.clearSelection(); 
                      editor.getSession().setScrollTop(0);
                  })
                  .catch(e=>console.error(e))
                
       }



}