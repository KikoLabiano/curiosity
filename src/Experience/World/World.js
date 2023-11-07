import Experience from "../Experience";
import Environment from "./Environment";
import Floor from "./Floor";
import Vehicle from "./Vehicle";
import Description from "./Description";
import Sound from "../Sound";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.resources = this.experience.resources;
    this.raycaster = this.experience.raycaster;

    this.resources.on("ready", () => {
      this.floor = new Floor();
      this.curiosity = new Vehicle("curiosity");
      this.curiosity.setPosition(-4, 0, 0);
      this.perseverance = new Vehicle("perseverance");
      this.ingenuity = new Vehicle("ingenuity");
      this.ingenuity.setPosition(4, 0, 0);
      this.environment = new Environment();
      this.loadDescriptionSound = new Sound("/sounds/click.mp3");

      this.raycaster.on("select", (name) => {
        this.description = new Description(
          name.substr(0, name.indexOf("Model"))
        );
        this.description.show();
        this.loadDescriptionSound.play();
      });

      this.hideLoader();
    });
  }

  hideLoader() {
    document.querySelector(".loaderContainer").style.display = "none";
  }

  update() {}
}
