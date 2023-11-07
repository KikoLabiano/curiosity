import * as THREE from "three";
import Experience from "../Experience";

export default class Vehicle {
  constructor(name) {
    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.resources = this.experience.resources;
    this.time = this.experience.time;
    this.debug = this.experience.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder(
        `${name.charAt(0).toUpperCase()}${name.slice(1)}`
      );
    }

    this.resource = this.resources.items[`${name}Model`];

    this.setModel();
  }

  setModel() {
    this.model = this.resource.scene;

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.model.position, "x")
        .min(-4)
        .max(4)
        .step(0.001)
        .name("X");
      this.debugFolder
        .add(this.model.position, "y")
        .min(0)
        .max(4)
        .step(0.001)
        .name("y")
        .name("Y");
      this.debugFolder
        .add(this.model.position, "z")
        .min(-4)
        .max(4)
        .step(0.001)
        .name("z")
        .name("Z");
    }

    this.scene.add(this.model);

    this.model.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }

  setPosition(x, y, z) {
    this.model.position.set(x, y, z);
  }
}
