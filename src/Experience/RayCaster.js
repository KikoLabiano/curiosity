import * as THREE from "three";

import Experience from "./Experience";
import EventEmitter from "./Utils/EventEmitter";

export default class RayCaster extends EventEmitter {
  constructor() {
    super();

    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.camera = this.experience.camera.instance;
    this.resources = this.experience.resources;
    this.mouse = new THREE.Vector2();
    this.sizes = this.experience.sizes;
    this.intersects = [];
    this.currentIntersect = null;
    this.selectableItems = this.resources.selectableItems;

    this.setInstance();
    this.setEvents();
  }

  setEvents() {
    window.addEventListener("mousemove", (event) => {
      this.mouse.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.mouse.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });

    window.addEventListener("click", () => {
      if (this.currentIntersect) {
        this.trigger("select", [this.currentIntersect.name]);
      }
    });
  }

  setInstance() {
    this.instance = new THREE.Raycaster();
    this.instance.near = 0;
    this.instance.far = 100;
  }

  update() {
    this.instance.setFromCamera(this.mouse, this.camera);
    this.currentIntersect = null;

    if (this.selectableItems && this.selectableItems.length > 0) {
      for (const model of this.selectableItems) {
        const modelIntersects = this.instance.intersectObject(model.scene);

        if (modelIntersects.length) {
          this.currentIntersect = model;
          model.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material.color.set("#ea8c85");
            }
          });
        } else {
          model.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material.color.set("#ffffff");
            }
          });
        }
      }
    }
  }
}
