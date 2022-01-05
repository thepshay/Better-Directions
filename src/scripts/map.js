import Address from "./address";
import Distance from "./distance";

export function loadMap() {
  console.log('loadmap')

  const mapOptions = {
    center: { lat: 37, lng: -96 },
    zoom: 5,
  }

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  return map;
}

export function getGeocode(address) {
  return new Promise((resolve, reject) => {
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ 'address' : address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        const currLat = results[0].geometry.location.lat();
        const currLng = results[0].geometry.location.lng();
        const newAddr = new Address(address, currLat, currLng);
        resolve(newAddr)
      } else {
        reject(new Error(`Cannot find address "${address}". Please try again \nStatus: ${status}`))
      }
    })
  });
}

export function addAutocomplete(input) {
  const autocompleteOptions = {
    types: []
  }
  const autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions)
}

export function addMarkers(addresses, map) {
  addresses.forEach((address, index) => {
    const addrGeocode = {
      lat: address.lat,
      lng: address.lng
    }
    const markerOptions = {
      map: map,
      position: addrGeocode,
      animation: google.maps.Animation.DROP
    }
    const marker = new google.maps.Marker(markerOptions);
    if (index === 0) {
      map.setCenter(addrGeocode);
      map.setZoom(10);
      marker.setIcon('http://maps.google.com/mapfiles/ms/icons/blue-dot.png');
    }
  })
}

export function showRoute(direction, map) {
  return new Promise((resolve, reject) => {
    const directionsRenderer = new google.maps.DirectionsRenderer({
      suppressMarkers: true,
      preserveViewport: true
    });
    directionsRenderer.setMap(map);      
    directionsRenderer.setDirections(direction.response);
  })
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
  
        const dist = new Distance(startAddr, endAddr, distance, duration, response);
        resolve(dist)
      } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
        setTimeout(() => {
          console.log('OVER QUERY LIMIT, Pause for 1.5 second')
          resolve(calculateRoute(startAddr, endAddr));
        }, 1500);
      } else {
        const error = new Error(`Unable to calculate route from ${startAddr.addr} to ${endAddr.addr}\nStatus: ${status}`)
        reject(error)
      }
    });
  })
}