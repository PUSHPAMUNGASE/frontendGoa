import React, { useEffect, useRef } from "react";
import PackagesInfo from "./PackagesInfo";
import "./PackagesCards.css";
import { useNavigate } from "react-router-dom";

export default function Packages() {
  const navigate = useNavigate();
  const cardsContainerRef = useRef(null);

  const check_more = (route) => {
    navigate(route);
  };

  // Auto-slide effect
  useEffect(() => {
    const container = cardsContainerRef.current;
    let scrollInterval;

    if (container) {
      scrollInterval = setInterval(() => {
        container.scrollBy({ left: 300, behavior: "smooth" }); // Adjust scroll distance
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth
        ) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        }
      }, 3000); // Adjust timing (milliseconds)
    }

    return () => clearInterval(scrollInterval); // Cleanup interval on component unmount
  }, []);

  return (
    <section className="top-holiday-package">
      <div className="top-head">
        <h1>Top Holiday Packages</h1>
      </div>
      <p>
        There are many travel agents offering holiday packages, but Goa Darling
        has something special for travel enthusiasts. This time we have come up
        with comprehensive holiday packages, including sightseeing of the hidden
        places of South Goa.
      </p>
      <div className="packages-container" ref={cardsContainerRef}>
        <div className="cards-container">
          {PackagesInfo.map((destination) => (
            <div key={destination.id} className="card">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              {/* <p>{destination.location}</p> */}
              {/* <p>{destination.description}</p> */}
              <button onClick={() => check_more(destination.route)}>
                Check More!!!
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
