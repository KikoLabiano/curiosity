import Experience from "../Experience";
import Environment from "./Environment";
import Floor from "./Floor";
import Curiosity from "./Curiosity";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.resources = this.experience.resources;

    this.resources.on("ready", () => {
      this.floor = new Floor();
      this.curiosity = new Curiosity();
      this.environment = new Environment();

      document.querySelector(".loaderContainer").style.display = "none";
    });
  }

  update() {}
}
