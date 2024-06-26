import moment from "moment";

export class Timer {
  startTime = 0;
  active = false;
  totalTime = 0;
  ended = false;

  // starts a new timer
  start = () => {
    this.startTime = 0;
    this.active = false;
    this.totalTime = 0;
    this.ended = false;

    this.resume();
  };

  // pause timer and update total time
  pause = () => {
    if (!this.active || this.ended) return;

    const now = moment().unix();
    const duration = now - this.startTime;
    this.totalTime += duration;
    this.active = false;
  };

  // reumes timer & make active
  resume = () => {
    if (this.active || this.ended) return;

    this.startTime = moment().unix();
    this.active = true;
  };

  // update total time and end timer
  finish = () => {
    if (this.ended) {
      return;
    }

    const now = moment().unix();
    const duration = now - this.startTime;
    this.totalTime += duration;
    this.active = false;
    this.ended = true;
  };
}

export default Timer;
