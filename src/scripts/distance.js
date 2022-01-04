export default class Distance {
  constructor(startAddr, endAddr, distance, duration){
    this.startAddr = startAddr;
    this.endAddr = endAddr;
    this.distance = distance;
    this.duration = duration;
  }

  getDistanceNumeric(measurementType) {
    let dist = 0;
    if (distance.includes(measurementType)) {
      dist = parseFloat(distance.split(' '));
    }
    return dist;
  }
}