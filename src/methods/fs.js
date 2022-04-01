import query from '../methods/query.js';

function getTime (){
  return Math.floor(new Date().getTime()/1000);
}
/**
 * WRITE FILE
 */

export function writeFile(param){

  let data = {
        "target": param.target,
        "id": param.id,
        "path": param.path,
        "name": param.name,
        "data": param.data,
        "action": "postTargetItem",
        "type": "text",
        "before": "",
        "after": "",
        "dts": getTime(),
        "ars": true,
        "player":"",
        "uuid":""       
  }
  let str = `IDE_${JSON.stringify(data)}`;

  return  query(str);
}

/**
 * READ FILE
 */
export function readFile(param){

  let data = {
      "target": param.target,
      "id": param.id,
      "path": param.path,// %ID%
      "name": param.name,
      "action": "getTargetItem",
      "data": "",
      "type": "text",
      "before": "",
      "after": "",
      "dts": getTime(),
      "ars": true,
      "player":"",
      "uuid":""
  };

  let str = `IDE_${JSON.stringify(data)}`;
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
  "ars": true,
  "player":"",
  "uuid":""       
}
  let str = `IDE_${JSON.stringify(data)}`;
  return await query(str);
}

/**
 * REMOVE
 */
export function remove(param){

  let data = {
        "target": param.target,
        "id": param.id,
        "path": param.path,
        "name": param.name,
        "data": param.data,
        "action": "deleteTargetItem",
        "type": "text",
        "before": "",
        "after": "",
        "dts": getTime(),
        "ars": true,
        "player":"",
        "uuid":"" 
  }
  let str = `IDE_${JSON.stringify(data)}`;

  return  query(str);
}



/**
 * RENAME
 */
export function rename(param){

  let data = {
        "target": param.target,
        "id": param.id,
        "path": param.path,
        "name": param.name,
        "data": param.data,
        "action": "renameTargetItem",
        "type": "",
        "before": "",
        "after": "",
        "dts": getTime(),
        "ars": true,
        "player":"",
        "uuid":""       
  }
  let str = `IDE_${JSON.stringify(data)}`;

  return  query(str);
}
