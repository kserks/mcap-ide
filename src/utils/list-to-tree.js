export default function unflatten(arr) {
      var tree = [],
          mappedArr = {},
          arrElem,
          mappedElem;

      // First map the nodes of the array to an object -> create a hash table.
      for(var i = 0, len = arr.length; i < len; i++) {
        arrElem = arr[i];
        mappedArr[arrElem.name] = arrElem;
        mappedArr[arrElem.name]['children'] = [];


      }


      for (var name in mappedArr) {
        if (mappedArr.hasOwnProperty(name)) {
          mappedElem = mappedArr[name];
          // If the element is not at the root level, add it to its parent array of children.
          if (mappedElem.parent) {
            mappedArr[mappedElem['parent']]['children'].push(mappedElem);
          }
          // If the element is at the root level, add it to first level elements array.
          else {
            tree.push(mappedElem);
          }
        }
      }
      return tree;
    }