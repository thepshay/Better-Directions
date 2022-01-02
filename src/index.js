import {config} from '../config'
import Address from './scripts/address';
import {loadMap} from './scripts/loadmap'
import {handleNewInput, setupStartingInput, handleCalculateRoute} from './scripts/sidebar'

// console.log('sanity check, index.js')

// Create the script tag, set the appropriate attributes
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=${config.api}&callback=initMap&libraries=places`;
script.async = true;

// Append the 'script' element to 'head'
document.head.appendChild(script);

// Attach your callback function to the `window` object
window.initMap = function() {
  const map = loadMap();
  setupStartingInput();
  handleNewInput();
  handleCalculateRoute();
};
