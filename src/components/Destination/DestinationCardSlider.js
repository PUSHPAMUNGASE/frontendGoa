

import React, { useState } from "react";
import "./DestinationCardSlider.css";  // Import the external CSS file
import img1 from "../../assets/dest_img/Arjuna.jpg"
import img2 from "../../assets/dest_img/Baga Beach - Copy.jpeg"
import img3 from "../../assets/dest_img/Calangute Beach.jpeg"
import img4 from "../../assets/dest_img/vagator.jpg"

const DestinationCardSlider = ({ onCardClick }) => {
  const destinations = [
    {
      id: 1,
      name: "Anjuna Beach",
      image: img1,
      description: "A vibrant beach known for its golden sands and flea markets.",
      additionalInfo: "Best time to visit: November to February.",
    },
    {
      id: 2,
      name: "Baga Beach",
      image: img2,
      description: "Lively beach famous for its nightlife and water sports.",
      additionalInfo: "Enjoy seafood at nearby shacks and live music.",
    },
    {
      id: 3,
      name: "Calangute Beach",
      image: img3,
      description: "A family-friendly beach with plenty of activities.",
      additionalInfo: "Known as the 'Queen of Beaches' in Goa.",
    },
    {
      id: 4,
      name: "Vagator Beach",
      image: img4,
      description: "A serene beach with dramatic cliffs and a peaceful vibe.",
      additionalInfo: "Great for relaxation and nature walks.",
    },
    {
      id: 5,
      name: "Palolem Beach",
      image: "https://example.com/palolem-beach.jpg",
      description: "A crescent-shaped beach with calm waters, perfect for swimming.",
      additionalInfo: "Known for its laid-back vibe and eco-friendly cottages.",
    },
    {
      id: 6,
      name: "Vasco Beach",
      image: "https://example.com/vasco-beach.jpg",
      description: "A calm beach known for its scenic beauty and local culture.",
      additionalInfo: "Best for a quiet retreat and boat rides.",
    },
    {
      id: 7,
      name: "Candolim Beach",
      image: "https://example.com/candolim-beach.jpg",
      description: "A popular beach with water sports and vibrant tourism.",
      additionalInfo: "Known for its beach shacks and stunning sunset views.",
    },
    {
      id: 8,
      name: "Colva Beach",
      image: "https://example.com/colva-beach.jpg",
      description: "A wide beach known for its golden sands and scenic beauty.",
      additionalInfo: "Popular among both locals and tourists.",
    },
    {
      id: 9,
      name: "Vagator Beach",
      image: "https://example.com/vagator-beach.jpg",
      description: "A serene beach with dramatic cliffs and a peaceful vibe.",
      additionalInfo: "Great for relaxation and nature walks.",
    },
    {
      id: 10,
      name: "Palolem Beach",
      image: "https://example.com/palolem-beach.jpg",
      description: "A crescent-shaped beach with calm waters, perfect for swimming.",
      additionalInfo: "Known for its laid-back vibe and eco-friendly cottages.",
    },
    {
      id: 11,
      name: "Vasco Beach",
      image: "https://example.com/vasco-beach.jpg",
      description: "A calm beach known for its scenic beauty and local culture.",
      additionalInfo: "Best for a quiet retreat and boat rides.",
    },
    {
      id: 12,
      name: "Candolim Beach",
      image: "https://example.com/candolim-beach.jpg",
      description: "A popular beach with water sports and vibrant tourism.",
      additionalInfo: "Known for its beach shacks and stunning sunset views.",
    },
    {
      id: 13,
      name: "Colva Beach",
      image: "https://example.com/colva-beach.jpg",
      description: "A wide beach known for its golden sands and scenic beauty.",
      additionalInfo: "Popular among both locals and tourists.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < destinations.length - 4) {
      setCurrentIndex(currentIndex + 4);
    } else {
      setCurrentIndex(0); // Reset to first item when reaching the end
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 4);
    } else {
      setCurrentIndex(destinations.length - 4); // Go to the last set of cards
    }
  };

  return (
    <>
    <h1 className="destinationh1">Discover Goa's Gems – From Sandy Shores to Hidden Havens!</h1>
    <div className="destination-card-slider">
      <div className="slider-container">
        <button onClick={handlePrev} className="slider-button prev">
          {"<"}
        </button>

        <div className="slider-content">
          {/* Displaying 4 cards at a time */}
          {destinations.slice(currentIndex, currentIndex + 4).map((destination) => (
            <div
              key={destination.id}
              className="destination-card"
              onClick={() => onCardClick(destination)}
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="card-image"
              />
              <h3 className="card-title">{destination.name}</h3>
              <p className="card-description">{destination.description}</p>
            </div>
          ))}
        </div>

        <button onClick={handleNext} className="slider-button next">
          {">"}
        </button>
      </div>
    </div>
    </>
  );
};

export default DestinationCardSlider;


