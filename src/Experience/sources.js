export default [
  {
    name: "environmentMapTexture",
    type: "cubeTexture",
    path: [
      "textures/environmentMap/test/px.png",
      "textures/environmentMap/test/nx.png",
      "textures/environmentMap/test/py.png",
      "textures/environmentMap/test/ny.png",
      "textures/environmentMap/test/pz.png",
      "textures/environmentMap/test/nz.png",
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
  // {
  //   name: "curiosityModel",
  //   type: "glbOptimizedModel",
  //   path: "models/Curiosity/Curiosity_opt.glb",
  //   selectable: true,
  // },
  // {
  //   name: "perseveranceModel",
  //   type: "glbOptimizedModel",
  //   path: "models/Perseverance/Perseverance_opt.glb",
  //   selectable: true,
  // },
  // {
  //   name: "ingenuityModel",
  //   type: "glbOptimizedModel",
  //   path: "models/Ingenuity/Ingenuity_opt.glb",
  //   selectable: true,
  // },
  {
    name: "curiosityModel",
    type: "dracoModel",
    path: "models/Curiosity/Curiosity_draco.glb",
    selectable: true,
  },
  {
    name: "perseveranceModel",
    type: "dracoModel",
    path: "models/Perseverance/Perseverance_draco.glb",
    selectable: true,
  },
  {
    name: "ingenuityModel",
    type: "dracoModel",
    path: "models/Ingenuity/Ingenuity_draco.glb",
    selectable: true,
  },
  {
    name: "backgroundTexture",
    type: "skyboxTexture",
    path: "textures/environmentMap/mars.jpg",
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
