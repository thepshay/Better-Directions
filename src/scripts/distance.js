export default class Distance {
  constructor(startAddr, endAddr, response){
    this.startAddr = startAddr;
    this.endAddr = endAddr;
    this.response = response;
  }

  getDistance() {
    const distance = this.response.routes[0].legs[0].distance.text;
    const dist = parseFloat(distance.split(' '));
    return dist;
  }

  getDurationMin() {
    const duration = this.response.routes[0].legs[0].duration.text;
    const durationArr = duration.split(' ');
    console.log(duration)
    let time = 0;
    for (let i = 0; i < durationArr.length; i+=2) {
      const currTime = [durationArr[i], durationArr[i+1]];
      const tempTime = parseInt(currTime[0])
      
      if (currTime[1] === 'min' || currTime[1] === 'mins') {
        time += tempTime;
      } else if (currTime[1] === 'hour' || currTime[1] === 'hours') {
        time += this.hourToMin(tempTime);
      } else if (currTime[1] === 'day' || currTime[1] === 'days') {
        time += this.dayToMin(tempTime);
      }
    }
    console.log(time)
    return time;
  }

  dayToMin(num) {
    return num * 1440
  }

  hourToMin(num) {
    return 60 * num
  }
}