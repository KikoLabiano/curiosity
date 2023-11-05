import * as THREE from "three";

export default class Scene {
  constructor() {
    this.setInstance();
  }

  setInstance() {
    this.instance = new THREE.Scene();
  }

  destroy() {
    // Traverse the whole scene

    this.instance.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();
        for (const key in child.material) {
          const value = child.material[key];
          if (value && typeof value.dispose === "function") {
            value.dispose();
          }
        }
      }
    });
  }
}
