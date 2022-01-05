// Inputs a an array
// Returns a pair of each array element
export function getAllPairs(array) {
  const allPairs = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++){
      if (i != j) {
        allPairs.push([array[i], array[j]])
      }
    }
  }
  return allPairs;
}

// converts distance to a n by n matrix, diagonals are null
// Ex. [1,2,3,4,5,6] ->
//  n 1 2
//  3 n 4
//  5 6 n
export function toMatrixForm(distances, num) {
  let dup = distances.slice();
  const matrix = [];

  for (let i = 0; i < num+1; i++) {
    const temp = dup.slice(0, num);
    const row = temp.slice(0, i).concat([null], temp.slice(i));
    dup = dup.slice(num)
    matrix.push(row)
  }
  return matrix;
}

// inputs an array
// returns the permutation of array
function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }

  const first = array.shift();
  const perms = permutations(array);
  const results = [];

  perms.forEach( perm => {
    for (let i = 0; i <= perm.length; i++) {
      const curr = perm.slice(0, i).concat([first], perm.slice(i));
      results.push(curr);
    }
  })
  return results;
}

// Takes a matrix of destinations
// Gets permutation of all vertices index, excluding starting (0)
// Loops through each permutation, and records the path with minimum distance.
export function tsp(matrix, vertices, startingIdx = 0) {
  const destinations = [];
  for (let i = 1; i < vertices; i++) {
    destinations.push(i);
  }

  // routePerm is all permutaion of the route
  const routePerm = permutations(destinations);
  let minDist = Number.MAX_SAFE_INTEGER;
  let minPath = [];

  // loop through each permutation to find min dist path
  routePerm.forEach(route => {
    let currDist = 0;
    let currPath = [];

    let curr = startingIdx;
    currPath.push(curr);
    route.forEach(next => {
      currPath.push(next)
      currDist += matrix[curr][next].getDistance();
      curr = next;
    });
    // return home distance
    currDist += matrix[curr][startingIdx].getDistance();
    currPath.push(startingIdx);

    if (currDist < minDist) {
      minDist = currDist;
      minPath = currPath.slice()
    }
  })
  return minPath; 
}
