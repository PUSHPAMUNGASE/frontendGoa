import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./DestinationDetails.css";

// Static data for fallback
const getStaticDestinationDetails = (id) => {
  const staticDestinations = [
    {
      id: "1",
      name: "Anjuna Beach",
      image: "https://example.com/anjuna-beach.jpg",
      description: "A vibrant beach known for its golden sands and flea markets.",
      additionalInfo: "Best time to visit: November to February.",
    },
    {
      id: "2",
      name: "Baga Beach",
      image: "https://example.com/baga-beach.jpg",
      description: "Lively beach famous for its nightlife and water sports.",
      additionalInfo: "Enjoy seafood at nearby shacks and live music.",
    },
    {
      id: "3",
      name: "Calangute Beach",
      image: "https://example.com/calangute-beach.jpg",
      description: "A family-friendly beach with plenty of activities.",
      additionalInfo: "Known as the 'Queen of Beaches' in Goa.",
    },
  ];

  return staticDestinations.find((dest) => dest.id === id);
};

const DestinationDetailPage = () => {
  const { destinationId } = useParams(); // Get destinationId from URL
  const location = useLocation(); // Get state passed from previous page
  const navigate = useNavigate(); // Navigation for redirection
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    // If state is passed, use it, otherwise fetch from static data
    if (location.state) {
      setDestination(location.state);
    } else {
      const fetchedDestination = getStaticDestinationDetails(destinationId);
      setDestination(fetchedDestination);
    }
  }, [destinationId, location.state]);

  // If destination is not found, redirect after 3 seconds
  if (!destination) {
 //   setTimeout(() => navigate("/"), 3000); // Redirect to Home after 3 seconds
    return (
      <div className="error-container">
        <h2>Destination not found!</h2>
        <p>Redirecting to the homepage...</p>
      </div>
    );
  }

  return (
    <div className="destination-details">
      <h1 className="destination-title">{destination.name}</h1>
      <img
        src={destination.image}
        alt={destination.name}
        className="detail-image"
      />
      <div className="description-container">
        <p>{destination.description}</p>
        <p>
          <strong>Additional Info:</strong> {destination.additionalInfo}
        </p>
      </div>
    </div>
  );
};

export default DestinationDetailPage;
