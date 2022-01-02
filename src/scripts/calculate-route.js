import Distance from "./distance";
import Address from "./address";
export {getDistance, calculateRoute}

const startAddr = new Address('Temple City, CA, USA', 34.1072305, -118.0578456);
const endAddr = new Address('Rosemead, CA, USA', 34.0805651, -118.072846);

const distanceArr = []

// returns distance obj from a to b and b to a
function getDistance(startAddr, endAddr) {
  calculateRoute(startAddr, endAddr);
  calculateRoute(endAddr, startAddr);
  console.log(distanceArr)
}

function calculateRoute(startAddr, endAddr) {
  const directionsService = new google.maps.DirectionsService();
  const requestOptions = {
    origin: startAddr.addr,
    destination: endAddr.addr,
    travelMode: 'DRIVING'
  }
  directionsService.route(requestOptions, (response, status, dist)=>{
    if (status=='OK'){
      console.log(response);
      const distance = response.routes[0].legs[0].distance.text;
      const duration = response.routes[0].legs[0].duration.text;
      // console.log(`distance: ${distance}| duration: ${duration}`);

      dist = new Distance(startAddr, endAddr, distance, duration);
      distanceArr.push(dist)
    } else {
      console.log(`didnt work ${status}`)
    }
  });
}