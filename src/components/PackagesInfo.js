import familyPackageImage from "./GoaDestinations/GoaImage/familyPackage.jpeg";
import groupPackageImage from "./GoaDestinations/GoaImage/GroupPackage.jpg";
import parttyImage from "./GoaDestinations/GoaImage/partyGoa.jpg";
import NorthGoaImage from "./GoaDestinations/GoaImage/NorthGoa.jpg";
import SouthGoaImage from "./GoaDestinations/GoaImage/SouthGoa.jpg";
import HinterlandImage from "./GoaDestinations/GoaImage/HinterlandImage.jpg";

const PackagesInfo = [
  {
    id: 1,
    name: "Group Tour Package",
    location: "Anjuna, Goa",
    image: groupPackageImage,
    description: "North Goa's Anjuna Beach",
    route: "/group-tour-package",
  },
  {
    id: 2,
    name: "Family Package",
    location: "Vagator, Goa",
    image: familyPackageImage,
    description: "North Goa's Vagator Beach",
    route: "/family-tour-package",
  },
  {
    id: 3,
    name: "Party De Goa",
    location: "Arambol, Goa",
    image: parttyImage,
    description: "North Goa's Cafe hopping Beach",
    route: "/honeymoon-tour-package",
  },
  {
    id: 4,
    name: "North Goa Package",
    location: "Palolem, Goa",
    image: NorthGoaImage,
    description: "South Goa's Palolem Beach",
    route: "/north-goa-tour-package",
  },
  {
    id: 5,
    name: "South Goa Package",
    location: "Canguinim, Goa",
    image: SouthGoaImage,
    description: "Dhoom cliff bike jumping point",
    route: "/south-goa-tour-package",
  },
  {
    id: 6,
    name: "Hinterland Goa Package",
    location: "Agonda, Goa",
    image: HinterlandImage,
    description: "South Goa's Dolphin spotting Beach",
    route: "/hinterland-goa-tour-package",
  },
];

export default PackagesInfo;
