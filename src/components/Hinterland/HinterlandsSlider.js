import React from "react";
import "./HinterlandsSlider.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HinterlandsSlider = ({ attractions }) => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleRedirect = (path) => {
    navigate(path); // Navigate to the specified route
  };

  return (
    <div className="attractions-container-hinterland">
      <h1>Hinterland</h1>
      <p>— Gems Of Goa —</p>
      <div className="carousel-container-hinterland">
        <Carousel interval={2000}>
          {attractions.map((attraction) => (
            <Carousel.Item
              key={attraction.id}
              onClick={() => handleRedirect(attraction.route)} // Navigate to the route
              style={{ cursor: "pointer" }} // Indicate clickable item
            >
              <img
                className="d-block w-100"
                src={attraction.image || "https://via.placeholder.com/1080x720"}
                alt={attraction.name}
              />
              <Carousel.Caption>
                <h3>{attraction.name}</h3>
                <p>{attraction.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HinterlandsSlider;
