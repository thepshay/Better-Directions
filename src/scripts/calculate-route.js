import Distance from "./distance";
import Address from "./address";
export {getPairDistance, calculateRoute, getAllPairs}

const startAddr = new Address('Temple City, CA, USA', 34.1072305, -118.0578456);
const endAddr = new Address('Rosemead, CA, USA', 34.0805651, -118.072846);

function getAllPairs(addresses) {
  const allPairs = [];
  for (let i = 0; i < addresses.length; i++) {
    for (let j = i+1; j < addresses.length; j++){
      const addr1 = addresses[i];
      const addr2 = addresses[j];
      allPairs.push([addr1, addr2]);
      allPairs.push([addr2, addr1]);
    }
  }
  return allPairs;
}

// returns distance obj from a to b and b to a
function getPairDistance(startAddr, endAddr) {
  const pairDist = [];
  calculateRoute(startAddr, endAddr, pairDist);
  calculateRoute(endAddr, startAddr, pairDist);
  return pairDist;
}

function calculateRoute(startAddr, endAddr) {

  return new Promise((resolve, reject) => {
    const directionsService = new google.maps.DirectionsService();
    const requestOptions = {
      origin: startAddr.addr,
      destination: endAddr.addr,
      travelMode: 'DRIVING'
    }
    directionsService.route(requestOptions, (response, status, dist)=>{
      if (status=='OK'){
        const distance = response.routes[0].legs[0].distance.text;
        const duration = response.routes[0].legs[0].duration.text;
        // console.log(`distance: ${distance}| duration: ${duration}`);
  
        dist = new Distance(startAddr, endAddr, distance, duration);
        resolve(dist)
      } else {
        reject(`didnt work ${status}`)
      }
    });
  })
}