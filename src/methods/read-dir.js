/*

import listToTree from '../utils/list-to-tree.js';
import * as fs from './fs.js';

export default async function (dirName, pathname){

  let dir;
  if(pathname===''){
    dir = dirName;
  }
  else{
    dir = dirName +'/'+ pathname;

  }
  let lastPathChunk = dir.split('/').pop();

  let res = await fs.readDir(dir);

  res = JSON.parse(res.data).map(i=>{
          if(i.parent===lastPathChunk) i.parent = 0;
          return i;
  });



  return { 
      name: lastPathChunk, 
      isDir: true, 
      path: '', 
      children: listToTree(res)
  } 
  
}

*/