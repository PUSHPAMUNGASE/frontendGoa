import React from "react";
import HinterlandsSlider from "./HinterlandsSlider";

const HinterlandInfo = [
  {
    id: 1,
    name: "Salaulim Dam",
    location: "Sanguem, Goa",
    image: "",
    description: "U-Ring Shaped Dam",
  },
  {
    id: 2,
    name: "Netravali Wildlife Sanctuary",
    location: "Netravali, Goa",
    image: "",
    description: "Wildlife Sanctuary",
  },
  {
    id: 3,
    name: "Savri Waterfall",
    location: "Netravali, Goa",
    image: "",
    description: "Waterfalls of Goa",
  },
  {
    id: 4,
    name: "Bamunbudo Waterfall",
    location: "Netravali, Goa",
    image: "",
    description: "Waterfalls of Goa",
  },
  {
    id: 5,
    name: "Curdi-The atlantis of Goa",
    location: "Sanguem, Goa",
    image: "",
    description: "the atlantis of Goa",
  },
  {
    id: 6,
    name: "Dudhsagar Waterfall",
    location: "Collem, Goa",
    image: "",
    description: "Waterfalls of Goa",
  },
  {
    id: 7,
    name: "Tambdi Surla",
    location: "Surla, Goa",
    image: "",
    description: "Kadamba Dynasty Temple",
  },
  {
    id: 8,
    name: "Chorla Ghat",
    location: "Chorla, Goa",
    image: "",
    description: "Western Ghats of Goa",
  },
  {
    id: 9,
    name: "Santrem Waterfall",
    location: "Sattari, Goa",
    image: "",
    description: "Waterfalls of Goa",
  },
  {
    id: 10,
    name: "Shivling Waterfall",
    location: "Sattari, Goa",
    image: "",
    description: "Waterfalls of Goa",
  },
];

export default function Hinterland() {
  return (
    <div>
      <HinterlandsSlider attractions={HinterlandInfo} />
    </div>
  );
}
