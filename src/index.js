import {config} from '../config'

// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${config.api}&callback=initMap`;
script.async = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);

// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });

};