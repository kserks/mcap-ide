import query from '../methods/query.js';

/**
 * WRITE FILE
 */

export function writeFile(body){

  let data = {
  "action": "postTargetItem",
  "type": "text",
  "before": "",
  "after": "",
  "dts": 1644914843,//new Date().getTime()
  "ars": true      
}
  let str = `IDE_${JSON.stringify(Object.assign(data, body))}`

  return  query(str);
}

/**
 * READ FILE
 */
export function readFile(param){
 //alert(JSON.stringify(param))
  let data = {
    "target": param.target,
    "id": param.id,
    "path": param.path,
    "name": param.name,
    "action": "getTargetItem",
    "data": "",
    "type": "text",
    "before": "",
    "after": "",
    "dts": Math.floor(new Date().getTime()/1000),
    "ars": true      
  };

  let str = `IDE_${JSON.stringify(data)}`

  return query(str);

}

/**
 * READ DIR
 */

export async function readDir(dirName){

  let data = {
  "target": dirName,
  "id": "",
  "path": "%ID%",
  "name": "*.*",
  "action": "getTargetItems",
  "data": "",
  "type": "",
  "before": "",
  "after": "",
  "dts": 1644914843,
  "ars": true      
}
  let str = `IDE_${JSON.stringify(data)}`

  return await query(str);
}