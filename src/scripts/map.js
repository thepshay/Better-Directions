import Address from "./address";
import Distance from "./distance";

export function loadMap() {
  const mapOptions = {
    center: { lat: 37, lng: -96 },
    zoom: 5,
  }

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  return map;
}

// inputs address and returns address object with lat, lng, address
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

// adds autocomplete to inputs
export function addAutocomplete(input) {
  const autocompleteOptions = {
    types: []
  }
  const autocomplete = new google.maps.places.Autocomplete(input, autocompleteOptions)
}

// given array of addresses adds marker for each address
export function addMarkers(addresses, map) {
  return addresses.map((address, index) => {
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
    return marker;
  });
}

export function addInfoWindow(markers, addresses, map) {
  markers.forEach((marker, i) => {
    const infoWindowOptions = {
      map: map,
      anchor: marker,
      content: `${addresses[i].addr}`,
      shouldFocus: false
    }
    const infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    infoWindow.close()
    marker.addListener( 'mouseover', e=> {
      infoWindow.open(infoWindowOptions);
    });
    marker.addListener('mouseout', e => {
      infoWindow.close();
    });
    
  })
}


// given two addresses returns direction object which holds the response
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
  
        const dist = new Distance(startAddr, endAddr, response);
        resolve(dist)
      } else if (status === google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
        setTimeout(() => {
          console.log('OVER QUERY LIMIT, Request paused for 1.5 second')
          resolve(calculateRoute(startAddr, endAddr));
        }, 1500);
      } else {
        const error = new Error(`Unable to calculate route from ${startAddr.addr} to ${endAddr.addr}\nStatus: ${status}`)
        reject(error)
      }
    });
  })
}

// displays the route for given direction array
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