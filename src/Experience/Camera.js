import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import Experience from "./Experience";

export default class Camera {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene.instance;
    this.canvas = this.experience.canvas;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Camera");
    }

    this.setInstance();
    this.setOrbitControls();
  }

  setInstance() {
    this.instance = new THREE.PerspectiveCamera(
      35,
      this.sizes.width / this.sizes.height,
      0.1,
      100
    );

    this.instance.position.set(6, 4, 8);
    this.scene.add(this.instance);
  }

  setOrbitControls() {
    this.orbitControls = new OrbitControls(this.instance, this.canvas);
    this.orbitControls.maxPolarAngle = Math.PI / 2 - 0.05; // Limita la cámara para que no mire directamente hacia arriba
    this.orbitControls.maxDistance = 25; // Limita la distancia máxima a la que puede alejarse la cámara

    this.orbitControls.enableDamping = true;
  }

  resize() {
    this.instance.aspect = this.sizes.width / this.sizes.height;
    this.instance.updateProjectionMatrix();
  }

  update() {
    this.orbitControls.update();
  }

  destroy() {
    this.orbitControls.dispose();
  }
}
