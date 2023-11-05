import * as THREE from "three";

import Experience from "../Experience";

export default class Environment {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Environment");
    }

    this.setSunLight();
    this.setEnvironmentMap();
    // this.setBackground();
  }

  setSunLight() {
    this.sunLight = new THREE.DirectionalLight("#ffffff", 6);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.camera.far = 15;
    this.sunLight.shadow.mapSize.set(1024, 1024);
    this.sunLight.shadow.normalBias = 0.027;
    this.sunLight.shadow.bias = -0.004;
    this.sunLight.position.set(3.5, 2, -1.25);
    this.scene.add(this.sunLight);

    if (this.debug.active) {
      this.debugFolder
        .add(this.sunLight, "intensity")
        .min(0)
        .max(10)
        .step(0.001)
        .name("Sun intensity");
      this.debugFolder
        .add(this.sunLight.position, "x")
        .min(-5)
        .max(5)
        .step(0.001)
        .name("Sun X");
      this.debugFolder
        .add(this.sunLight.position, "y")
        .min(-5)
        .max(5)
        .step(0.001)
        .name("Sun Y");
      this.debugFolder
        .add(this.sunLight.position, "z")
        .min(-5)
        .max(5)
        .step(0.001)
        .name("Sun Z");
    }
  }

  setEnvironmentMap() {
    this.environmentMap = {};
    this.environmentMap.intensity = 2;
    this.environmentMap.texture = this.resources.items.environmentMapTexture;
    this.environmentMap.texture.colorSpace = THREE.SRGBColorSpace;

    this.scene.environment = this.environmentMap.texture;

    this.environmentMap.updateMaterial = () => {
      this.scene.traverse((child) => {
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.MeshStandardMaterial
        ) {
          child.material.envMap = this.environmentMap.texture;
          child.material.envMapIntensity = this.environmentMap.intensity;
          child.material.needsUpdate = true;
        }
      });
    };

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.environmentMap, "intensity")
        .min(0)
        .max(10)
        .step(0.001)
        .onChange(this.environmentMap.updateMaterial)
        .name("Env. map Intensity");
    }

    this.environmentMap.updateMaterial();
  }

  // setBackground() {
  //   this.background = {};
  //   this.background.texture = this.resources.items.backgroundTexture;
  //   this.background.texture.mapping = THREE.EquirectangularReflectionMapping;
  // }
}
