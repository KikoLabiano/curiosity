import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { GroundProjectedSkybox } from "three/addons/objects/GroundProjectedSkybox.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js"; // Asegúrate de que la ruta es correcta
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

import Experience from "../Experience";

import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();

    // Options
    this.sources = sources;
    this.experience = new Experience();
    this.scene = this.experience.scene.instance;
    this.debug = this.experience.debug;

    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder("Resources");
    }

    // Setup
    this.items = {};
    this.toLoad = this.sources.length;
    this.loaded = 0;
    this.selectableItems = [];

    this.setLoaders();
    this.startLoading();
    this.setDefaultLoadingManager();
  }

  setLoaders() {
    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader();
    // this.loaders.gltfLoader.setMeshoptDecoder(MeshoptDecoder);
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("../draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    this.loaders.textureLoader = new THREE.TextureLoader();
    this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
    this.loaders.rgbeLoader = new RGBELoader();
  }

  startLoading() {
    // Load each source
    for (const source of this.sources) {
      switch (source.type) {
        case "glbOptimizedModel":
          this.loaders.gltfLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
          break;
        case "dracoModel":
          this.loaders.gltfLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
        case "texture":
          this.loaders.textureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
        case "cubeTexture":
          this.loaders.cubeTextureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
          });
          break;
        case "skyboxTexture":
          this.loaders.textureLoader.load(source.path, (file) => {
            this.sourceLoaded(source, file);
            const skybox = new GroundProjectedSkybox(file);
            skybox.scale.setScalar(50);
            skybox.visible = false;
            this.scene.add(skybox);

            if (this.debug.active) {
              this.debugFolder.add(skybox, "visible").name("Skybox");
            }
          });
          break;
        default:
          break;
      }
    }
  }

  sourceLoaded(source, file) {
    this.items[source.name] = file;
    this.loaded++;
    if (source.selectable) {
      this.selectableItems.push({ scene: file.scene, name: source.name });
    }

    if (this.loaded === this.toLoad) {
      this.trigger("ready");
    }
  }

  setDefaultLoadingManager() {
    THREE.DefaultLoadingManager.onProgress = function (
      url,
      itemsLoaded,
      itemsTotal
    ) {
      document.querySelector(
        ".loaderProgress"
      ).textContent = `Loaded ${itemsLoaded} of ${itemsTotal} files.`;
    };

    THREE.DefaultLoadingManager.onError = function (url) {
      console.error("There was an error loading " + url);
    };
  }
}
