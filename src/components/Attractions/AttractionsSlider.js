import React from "react";
import "./AttractionsSlider.css";
import { Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AttractionsSlider = ({ attractions }) => {
  const navigate = useNavigate(); // React Router hook for navigation

  const handleRedirect = (path) => {
    navigate(path); // Navigate to the specified route
  };

  return (
    <div className="attractions-container">
      <h1>ATTRACTIONS</h1>
      <p>— worth a thousand stories —</p>
      <div className="carousel-container">
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
                {/* <p>{attraction.description}</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AttractionsSlider;
