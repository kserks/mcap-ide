export default function (path, current){

  return path.split(/\\{1,}/g)
             .join('/')
             .replace('/'+current.name, '')
             .replace('ide/', '')
             .replace(current.target, '')
             .replace(/^\//g, '');
}