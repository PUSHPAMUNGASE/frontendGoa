import AttractionsSlider from "./AttractionsSlider";
import React from "react";
import { Carousel } from "react-bootstrap";
import ArambolImage from "./IMG/arambol.jpg";
import Morjimimage from "./IMG/morjim.jpg";
import chaporafort from "./IMG/chapora.jpg";
import anjunbeach from "./IMG/anjuna.jpg";
import saptakoteshwar from "./IMG/saptakoteshwar.jpg";

export const AttractionsInfo = [
  {
    id: 1,
    name: "Arambol Beach",
    location: "Arambol, Goa",
    image: ArambolImage,
    description: "North Goa's Divine Beaches",
    route: "/arambol-beach",
  },
  {
    id: 2,
    name: "Morjim Beach",
    location: "Morjim, Goa",
    image: Morjimimage,
    description: "North Goa's Divine Beach",
    route: "/morjim-beach",
  },
  {
    id: 3,
    name: "Chapora Fort",
    location: "Chapora, Goa",
    image: chaporafort,
    description: "Chapora Fort, The Dil Chahta hai wala moment",
    route: "/chapora-fort",
  },
  {
    id: 4,
    name: "Anjuna Beach",
    location: "Anjuna, Goa",
    image: anjunbeach,
    description: "North Goa's Divine Beach with EPIC Sunset",
  },
  {
    id: 5,
    name: "Shri Saptakoteshwar Mandir",
    location: "Narva, Maem, Goa",
    image: saptakoteshwar,
    description: "Goan Temples",
  },
  {
    id: 6,
    name: "Divar Island",
    location: "Divar, Goa",
    image: "",
    description: "The Treasure Island of Goa",
  },
  {
    id: 7,
    name: "Old Goa",
    location: "Old Goa, Goa",
    image: "",
    description: "Goa's beautiful church",
  },
  {
    id: 8,
    name: "Shree Mangueshi Temple",
    location: "Mardol, Goa",
    image: "",
    description: "Goan Temples",
  },
  {
    id: 9,
    name: "Shree Shantadurga Temple",
    location: "Ponda, Goa",
    image: "",
    description: "Goan Temples",
  },
  {
    id: 10,
    name: "Baina Flyover",
    location: "Baina, Vasco, Goa",
    image: "",
    description: "Goan Marine-drive",
  },
  {
    id: 11,
    name: "Sankval Beach",
    location: "Sankval, Vasco, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 12,
    name: "Majorda Beach",
    location: "Majorda, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 13,
    name: "Betalbatim Beach",
    location: "Betalbatim, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 14,
    name: "Benaulim Beach",
    location: "Benaulim, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 15,
    name: "Betul Beach",
    location: "Betul, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 16,
    name: "Shri Shantadurga Kunkallikarin Temple",
    location: "Fatorpa, Goa",
    image: "",
    description: "Goan Temples",
  },
  {
    id: 17,
    name: "Cabo de Rama Beach",
    location: "Canaguinim, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 18,
    name: "Kakolem Beach",
    location: "kakolem, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 19,
    name: "Cola Beach",
    location: "kola, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 20,
    name: "Agonda Beach",
    location: "Agonda, Goa",
    image: "",
    description: "South-Goa's Divine Beaches",
  },
  {
    id: 21,
    name: "Mallikarjun Temple",
    location: "Canacona, Goa",
    image: "",
    description: "Goan Temples",
  },
];

function Att() {
  return (
    <div>
      <AttractionsSlider attractions={AttractionsInfo} />
    </div>
  );
}

export default Att;
