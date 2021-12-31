import {config} from '../config'
import {loadMap} from './scripts/loadmap'

// console.log('sanity check, index.js')

// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${config.api}&callback=initMap`;
script.async = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);

// Attach your callback function to the `window` object
window.initMap = function() {
  loadMap();
};