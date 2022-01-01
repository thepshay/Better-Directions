import {addAutoToStartInput} from './sidebar'

function loadMap() {
  console.log('sanity check, loadmap')

  const mapOptions = {
    center: { lat: 37, lng: -96 },
    zoom: 5,
  }

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  addAutoToStartInput();
}

export {loadMap}
