import React from "react";

function Card({ location }) {
  return (
    <div className="card">
      <img src={location.photo} alt={location.title} className="card-image" />
      <div className="card-content">
        <h3>{location.title}</h3>
        {/* <p>{location.desc}</p> */}
        <p>{/* <strong>Address:</strong> {location.address} */}</p>
        <p>
          {/* <strong>Budget:</strong> ₹{location.budget} */}
        </p>
        {/* {location.offer && <span className="offer-tag">Special Offer!</span>} */}
        <button className="details-btn">View Details</button>
      </div>
    </div>
  );
}

export default Card;
