import * as fs from './fs.js';

export default async function saveFile(param){

    try{
      let res = await fs.writeFile({
                            "target": param.target,
                            "id": param.id,
                            "path": param.path,
                            "name": param.name,
                            "data": param.data
                      });

      //emit('MakeFile');
    }
    catch (err){
      alert(err)
    }
 


}