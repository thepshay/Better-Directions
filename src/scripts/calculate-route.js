import Distance from "./distance";
import Address from "./address";

const startAddr = new Address('Temple City, CA, USA', 34.1072305, -118.0578456);
const endAddr = new Address('Rosemead, CA, USA', 34.0805651, -118.072846);

export function getAllPairs(addresses) {
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

export function calculateRoute(startAddr, endAddr) {
  let wait = 0;
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