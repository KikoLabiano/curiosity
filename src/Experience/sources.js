export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "textures/environmentMap/px.jpg",
      "textures/environmentMap/nx.jpg",
      "textures/environmentMap/py.jpg",
      "textures/environmentMap/ny.jpg",
      "textures/environmentMap/pz.jpg",
      "textures/environmentMap/nz.jpg",
    ],
  },
  {
    name: "grassColorTexture",
    type: "texture",
    path: "textures/dirt/color.jpg",
  },
  {
    name: "grassNormalTexture",
    type: "texture",
    path: "textures/dirt/normal.jpg",
  },
  {
    name: "curiosityModel",
    type: "gltfModel",
    path: "models/Curiosity/glTF/Curiosity.gltf",
  },
  {
    name: "backgroundTexture",
    type: "skyboxTexture",
    path: "textures/environmentMap/mars.hdr",
  },
  {
    name: "marsGroundColorTexture",
    type: "texture",
    path: "textures/ground/red_laterite_soil_stones_diff_1k.jpg",
  },
  {
    name: "marsGroundAOMetallnessRoughnessTexture",
    type: "texture",
    path: "textures/ground/red_laterite_soil_stones_arm_1k.jpg",
  },
  {
    name: "marsGroundNormalTexture",
    type: "texture",
    path: "textures/ground/red_laterite_soil_stones_nor_gl_1k.jpg",
  },
];
