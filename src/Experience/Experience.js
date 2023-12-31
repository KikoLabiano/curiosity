import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";
import World from "./World/World";
import Resources from "./Utils/Resources";
import sources from "./sources";
import Debug from "./Utils/Debug";
import Scene from "./Scene";
import RayCaster from "./RayCaster";
import Device from "./Utils/Device";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }

    instance = this;

    this.canvas = canvas;

    // Global access (for debug)
    window.experience = this;

    // Setup
    this.debug = new Debug();
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.raycaster = new RayCaster();
    this.device = new Device();
    this.world = new World();
    this.renderer = new Renderer();

    this.sizes.on("resize", () => {
      this.resize();
    });

    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.raycaster.update();
    this.renderer.update();
  }

  destroy() {
    this.sizes.destroy();
    this.time.destroy();
    this.scene.destroy();
    this.camera.destroy();
    this.renderer.destroy();
    this.debug.destroy();
  }
}
