export function traverseTree(obj, callback) {
  callback(obj);
  if (obj.hasOwnProperty('children')) {
    for (let i = 0; i < obj.children.length; i++) {
      traverseTree(obj.children[i], callback);
    }
  }
}
