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

export function readFile(body){

  let data = {
    "target": "cct",
    "id": "1",
    "path": "%ID%",
    "name": "111.txt",
    "action": "getTargetItem",
    "data": "",
    "type": "text",
    "before": "",
    "after": "",
    "dts": 1644914843,
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