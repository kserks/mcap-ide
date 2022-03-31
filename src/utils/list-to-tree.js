/**
 * List to tree
 * Flat array to object tree
 * @Array list
 * @String root
 */

export default function (list, root) {
  let map = {};
  let node;
  let roots = [];
  let i;
  
  for (i = 0; i < list.length; i += 1) {
    map[list[i].name] = i; 
    list[i].children = [];
  }
  for (i = 0; i < list.length; i += 1) {
    node = list[i];
    if (node.parent !== root) {
      list[map[node.parent]].children.push(node);
    } else {
      roots.push(node);
    }
  }
  return roots;
}