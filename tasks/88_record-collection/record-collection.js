/* eslint 'require-jsdoc': 0 */

export function updateRecords(id, prop, value) {
  const collection = {
    '2548': {
      'album': 'Slippery When Wet',
      'artist': 'Bon Jovi',
      'tracks': [
        'Let It Rock',
        'You Give Love a Bad Name',
      ],
    },
    '2468': {
      'album': '1999',
      'artist': 'Prince',
      'tracks': [
        '1999',
        'Little Red Corvette',
      ],
    },
    '1245': {
      'artist': 'Robert Palmer',
      'tracks': [],
    },
    '5439': {
      'album': 'ABBA Gold',
    },
  };
  // let collectionCopy = JSON.parse(JSON.stringify(collection));
  const collectionCopy = JSON.parse(JSON.stringify(collection));
  if (!value) delete collectionCopy[id][prop];
  if (Array.isArray(collectionCopy[id][prop])) {
    collectionCopy[id][prop].push(value);
  } else if (prop === 'tracks' && !collectionCopy[id][prop] && value !== '') {
    collectionCopy[id][prop] = [value];
  } else if (prop === 'artist' && !collectionCopy[id][prop] && value !== '') {
    collectionCopy[id][prop] = value;
  }
  return collectionCopy;
}
