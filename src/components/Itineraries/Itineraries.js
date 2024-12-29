import React, { useState } from "react";
import Card from "./card";
import ItinerariesInfo from "./ItinerariesInfo";
import { useNavigate } from "react-router-dom";
import "./Itineraries.css";

export default function Itineraries() {
  const navigate = useNavigate();

  const check_more = (route1) => {
    navigate(route1); // Navigate to the dynamic route
  };

  const [region, setRegion] = useState("");
  const [interest, setInterest] = useState("");
  const [length, setLength] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter the ItinerariesInfo based on selected criteria
    const filtered = ItinerariesInfo.filter((loc) => {
      return (
        (region ? loc.location === region : true) &&
        (interest
          ? loc.interest.toLowerCase() === interest.toLowerCase()
          : true) &&
        (length ? loc.triplength === length : true)
      );
    });

    setFilteredLocations(filtered); // Update state with filtered locations
  };

  return (
    <div className="itineraries-container">
      <h1 className="itineraries-title">ITINERARIES</h1>
      <p className="itineraries-subtitle">— that beckon every traveller —</p>

      {/* Form Section */}
      <div className="itineraries-form-container">
        <form onSubmit={handleSubmit}>
          <div className="itineraries-dropdown">
            <label htmlFor="region">Select Region:</label>
            <select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="north">North Goa</option>
              <option value="south">South Goa</option>
            </select>
          </div>

          <div className="itineraries-dropdown">
            <label htmlFor="interest">Select Interest:</label>
            <select
              id="interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="beaches">Beaches</option>
              <option value="adventure">Adventure</option>
              <option value="culture">Culture</option>
              <option value="nightlife">Nightlife</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>

          <div className="itineraries-dropdown">
            <label htmlFor="length">Trip Length:</label>
            <select
              id="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="1-3 days">1-3 Days</option>
              <option value="3-4 days">3-4 Days</option>
              <option value="5-6 days">5-6 Days</option>
              <option value="7-13 days">7-13 Days</option>
              <option value="15+ Days">15+ Days</option>
            </select>
          </div>

          <button type="submit" className="itineraries-submit-btn">
            Submit
          </button>
        </form>
      </div>

      {/* Cards Section */}
      <div className="itineraries-cards-container">
        {filteredLocations.length > 0 ? (
          filteredLocations.map((location) => (
            <Card key={location.id} location={location} />
          ))
        ) : (
          <p className="itineraries-no-results">
            No itineraries found for the selected criteria.
          </p>
        )}
      </div>
    </div>
  );
}
