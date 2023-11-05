import EventEmitter from "./EventEmitter";

export default class Sizes extends EventEmitter {
  constructor() {
    super();

    // Setup
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.pixelRatio = Math.min(window.devicePixelRatio, 2);

    // Resize event
    window.addEventListener("resize", () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.pixelRatio = Math.min(window.devicePixelRatio, 2);

      this.trigger("resize");
    });
  }

  // resize() {
  //   this.width = window.innerWidth;
  //   this.height = window.innerHeight;
  //   this.pixelRatio = Math.min(window.devicePixelRatio, 2);

  //   this.trigger("resize");
  // }

  destroy() {
    // window.removeEventListener("resize", this.resize);
    this.off("resize");
  }
}
