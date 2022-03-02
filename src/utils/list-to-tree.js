export default function unflatten(arr) {
      var tree = [],
          mappedArr = {},
          arrElem,
          mappedElem;


      for(var i = 0, len = arr.length; i < len; i++) {
          arrElem = arr[i];
          mappedArr[arrElem.name] = arrElem;
          mappedArr[arrElem.name]['children'] = [];
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