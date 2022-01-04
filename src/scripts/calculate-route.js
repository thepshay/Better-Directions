import Distance from "./distance";
import Address from "./address";

const startAddr = new Address('Temple City, CA, USA', 34.1072305, -118.0578456);
const endAddr = new Address('Rosemead, CA, USA', 34.0805651, -118.072846);

export function getAllPairs(addresses) {
  const allPairs = [];
  for (let i = 0; i < addresses.length; i++) {
    for (let j = 0; j < addresses.length; j++){
      if (i != j) {
        allPairs.push([addresses[i], addresses[j]])
      }
    }
  }
  return allPairs;
}

export function calculateRoute(startAddr, endAddr) {
  const directionsService = new google.maps.DirectionsService();
  return new Promise((resolve, reject) => {
    
    const requestOptions = {
      origin: startAddr.addr,
      destination: endAddr.addr,
      travelMode: 'DRIVING'
    }
    directionsService.route(requestOptions, (response, status)=>{
      if (status=='OK'){
        const distance = response.routes[0].legs[0].distance.text;
        const duration = response.routes[0].legs[0].duration.text;
        // console.log(`distance: ${distance}| duration: ${duration}`);
  
        const dist = new Distance(startAddr, endAddr, distance, duration, response);
        resolve(dist)
      } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
        // Prevent OVER QUERY LIMIT, set delay to 2 second 
        setTimeout(() => {
          console.log('waiting')
          resolve(calculateRoute(startAddr, endAddr));
        }, 2000);
      } else {
        const error = new Error(`Unable to calculate route from ${startAddr.addr} to ${endAddr.addr}\nStatus: ${status}`)
        reject(error)
      }
    });
  })
}

// export function showRoute(startAddr, endAddr, map) {
//   const directionsRenderer = new google.maps.DirectionsRenderer();
//   const directionsService = new google.maps.DirectionsService();
//   directionsRenderer.setMap(map)
//   return new Promise((resolve, reject) => {
//     const requestOptions = {
//       origin: startAddr.addr,
//       destination: endAddr.addr,
//       travelMode: 'DRIVING'
//     }
//     directionsService.route(request, function(result, status) {
//       if (status == 'OK') {
//         directionsRenderer.setDirections(result);
//       }
//     });  
//   });
// }

// converts distance to a n by n matrix
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
      currDist += matrix[curr][next].getDistanceNumeric('mi');
      curr = next;
    });
    // return home distance
    currDist += matrix[curr][startingIdx].getDistanceNumeric('mi');
    currPath.push(startingIdx);

    if (currDist < minDist) {
      minDist = currDist;
      minPath = currPath.slice()
    }
  })
  return minPath; 
}
