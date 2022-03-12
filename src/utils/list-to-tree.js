
export default function unflatten(arr) {
      var tree = [],
          mappedArr = {},
          arrElem,
          mappedElem;


      for(let i = 0; i < arr.length; i++) {
          arrElem = arr[i];
          mappedArr[arrElem.name] = arrElem;
          mappedArr[arrElem.name]['children'] = [];
          mappedArr[arrElem.name]['active'] = false;
      }


      for (var name in mappedArr) {
        if (mappedArr.hasOwnProperty(name)) {
          mappedElem = mappedArr[name];
          if (mappedElem.parent) {

            mappedArr[mappedElem['parent']]['children'].push(mappedElem);
          }
          else {
            tree.push(mappedElem);
          }
        }
      }
      return tree;
    }
