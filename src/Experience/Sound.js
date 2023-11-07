export default class Sound {
  constructor(path) {
    this.instance = new Audio(path);
  }

  play() {
    this.instance.volume = 1;
    this.instance.currentTime = 0;
    this.instance.play();
  }
}
