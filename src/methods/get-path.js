export default function (path, current){

  let p = path.split(/\\{1,}/g)
             .join('/')
             .replace('/'+current.name, '')
             .replace('ide/', '')
             .replace(current.target, '')
             .replace(/^\//g, '');

  if(/\d+/g.test(current.id)){
    return '%ID%'+p;
  }
  return p;
}