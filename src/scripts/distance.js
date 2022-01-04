export default class Distance {
  constructor(startAddr, endAddr, distance, duration, response){
    this.startAddr = startAddr;
    this.endAddr = endAddr;
    this.distance = distance;
    this.duration = duration;
    this.response = response;
  }

  getDistanceNumeric(measurementType) {
    let dist = 0;
    if (this.distance.includes(measurementType)) {
      dist = parseFloat(this.distance.split(' '));
    }
    return dist;
  }

  // getDistance(startAddr, endAddr)
}