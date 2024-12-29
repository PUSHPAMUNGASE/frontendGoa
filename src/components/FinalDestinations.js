// FinalDestinations.js
import React from 'react';
import DestinationCardSlider from './Destination/DestinationCardSlider'; // Your card component
import MapComponent from './Destinations'; // Your map component

function FinalDestinations() {
  return (
    <div className="final-destinations-container">
      <div className="destination-cards">
        <DestinationCardSlider /> {/* Render the card slider */}
      </div>
      <div className="destination-map">
        <MapComponent /> {/* Render the map */}
      </div>
    </div>
  );
}

export default FinalDestinations;
