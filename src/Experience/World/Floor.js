import * as THREE from "three";
import Experience from "../Experience";

export default class Floor {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.resources = this.experience.resources;

    this.setGeometry();
    this.setTextures();
    this.setMaterial();
    this.setMesh();
  }

  setGeometry() {
    this.geometry = new THREE.CircleGeometry(20, 64);
  }

  setTextures() {
    this.textures = {};

    this.textures.color = this.resources.items.marsGroundColorTexture;
    this.textures.color.colorSpace = THREE.SRGBColorSpace;
    this.textures.color.repeat.set(8, 8);
    this.textures.color.wrapS = THREE.RepeatWrapping;
    this.textures.color.wrapT = THREE.RepeatWrapping;

    this.textures.normal = this.resources.items.marsGroundNormalTexture;
    this.textures.normal.repeat.set(8, 8);
    this.textures.normal.wrapS = THREE.RepeatWrapping;
    this.textures.normal.wrapT = THREE.RepeatWrapping;

    this.textures.aoMetalnessRoughness =
      this.resources.items.marsGroundAOMetallnessRoughnessTexture;
    this.textures.aoMetalnessRoughness.repeat.set(8, 8);
    this.textures.aoMetalnessRoughness.wrapS = THREE.RepeatWrapping;
    this.textures.aoMetalnessRoughness.wrapT = THREE.RepeatWrapping;
  }

  setMaterial() {
    this.material = new THREE.MeshStandardMaterial({
      map: this.textures.color,
      normalMap: this.textures.normal,
      aoMap: this.textures.aoMetalnessRoughness,
      metalnessMap: this.textures.aoMetalnessRoughness,
      roughnessMap: this.textures.aoMetalnessRoughness,
      displacementMap: this.textures.displacement,
      metalness: 0.2,
    });
  }

  setMesh() {
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    this.mesh.rotation.x = -Math.PI * 0.5;
    this.mesh.receiveShadow = true;
    this.scene.add(this.mesh);
  }
}
