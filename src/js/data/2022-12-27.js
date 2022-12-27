dataSetVersion = "2022-12-27"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Group",
    key: "group",
    tooltip: "Check this to restrict to either groups",
    checked: false,
    sub: [
      { name: "The Boys", key: "boys" },
      { name: "The Seven", key: "seven" },
      { name: "Vought", key: "vought" },
      { name: "Others", key: "others" },
    ],
  },
  {
    name: "Filter by Season",
    key: "season",
    tooltip:
      "Check this to filter out characters depending on which season they made their first appearance on",
    checked: false,
    sub: [
      { name: "Season 1", key: "s1" },
      { name: "Season 2", key: "s2" },
      { name: "Season 3", key: "s3" },
    ],
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Billy Butcher",
    img: "ImivMny.png",
    opts: {
      group: ["boys"],
      season: ["s1"],
    },
  },
  {
    name: "Hughie Campbell",
    img: "bGhsiGX.png",
    opts: {
      group: ["boys"],
      season: ["s1"],
    },
  },
  {
    name: "Homelander",
    img: "3LyjLAb.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "Starlight",
    img: "Xn1WkCY.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "Queen Maeve",
    img: "wexLdYq.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "A-Train",
    img: "RMyUuKE.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "Mother's Milk",
    img: "0vxiwYW.png",
    opts: {
      group: ["boys"],
      season: ["s1"],
    },
  },
  {
    name: "The Deep",
    img: "PLTYvej.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "Frenchie",
    img: "svX5ZMV.png",
    opts: {
      group: ["boys"],
      season: ["s1"],
    },
  },
  {
    name: "The Female",
    img: "800GmGx.png",
    opts: {
      group: ["boys"],
      season: ["s1"],
    },
  },
  {
    name: "Black Noir",
    img: "CqeJGwW.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "Madelyn Stillwell",
    img: "8O9jFgm.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
  {
    name: "Ashley Barrett",
    img: "T39RbMr.png",
    opts: {
      group: ["vought"],
      season: ["s1"],
    },
  },
  {
    name: "Stormfront",
    img: "ry8wKK5.png",
    opts: {
      group: ["seven"],
      season: ["s2"],
    },
  },
  {
    name: "Soldier Boy",
    img: "QYLeXoJ.png",
    opts: {
      group: ["boys"],
      season: ["s3"],
    },
  },
  {
    name: "Ryan Butcher",
    img: "ndELJNN.png",
    opts: {
      group: ["others"],
      season: ["s12"],
    },
  },
  {
    name: "Victoria Neuman",
    img: "b7OGF7o.png",
    opts: {
      group: ["others"],
      season: ["s2"],
    },
  },
  {
    name: "Hugh Campbell Sr.",
    img: "hgcw812.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
  {
    name: "Translucent",
    img: "RcM9yIK.png",
    opts: {
      group: ["seven"],
      season: ["s1"],
    },
  },
  {
    name: "Robin Ward",
    img: "gTEuZly.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
  {
    name: "Stan Edgar",
    img: "6FwJSKD.png",
    opts: {
      group: ["vought"],
      season: ["s1"],
    },
  },
  {
    name: "Becca Butcher",
    img: "4tSiyUp.png",
    opts: {
      group: ["others"],
      season: ["s2"],
    },
  },
  {
    name: "Popclaw",
    img: "2itZ2q6.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
  {
    name: "Grace Mallory",
    img: "GSwPMY5.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
  {
    name: "Blue Hawk",
    img: "HWjD9YL.png",
    opts: {
      group: ["vought"],
      season: ["s3"],
    },
  },
  {
    name: "Donna January",
    img: "p1HyULb.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
  {
    name: "Supersonic",
    img: "ro4iXJH.png",
    opts: {
      group: ["seven"],
      season: ["s3"],
    },
  },
  {
    name: "Susan Raynor",
    img: "XVi4nKM.png",
    opts: {
      group: ["others"],
      season: ["s1"],
    },
  },
];
