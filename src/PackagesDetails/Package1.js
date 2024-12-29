import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Package1.css";
import groupimage from "./PackageImage/Snapinsta.app_29090355_1643663992414401_5401758811738341376_n_1080.jpg";

export default function Package1() {
  const [activeTab, setActiveTab] = useState("itinerary"); // State to manage the active tab

  // Function to toggle between tabs
  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="package1-container">
        <div className="package1-section-header">
          <h2>Group Tour Packages</h2>
          <hr />
        </div>
        <div className="package1-content">
          <div className="package1-image">
            <img src={groupimage} alt="Group Tour" />
          </div>
          <div className="package1-description">
            <h3>Plan Your Exciting Trip To Goa With Viva Goa.</h3>
            <p>
              This vacation plans amazing group tour packages for Goa with your
              family and friends. In India, visiting Goa is frequently
              celebrated as a milestone toward reaching adolescence.
            </p>
            <p>
              Immerse yourself in the vibrant charm of Goa with our thoughtfully
              designed group tour package, offering a unique blend of beachside
              bliss and hinterland exploration! While the golden sands of
              Palolem and Baga beckon you for relaxation and water sports,
              venture beyond to discover Goa’s lush hinterlands. Explore the
              spice plantations, walk through the serene villages of Divar
              Island, and marvel at the cascading beauty of Dudhsagar Falls.
              Visit the heritage-filled Latin Quarter of Fontainhas, savor
              authentic Goan delicacies, and enjoy the rhythm of local folk
              music. With comfortable accommodations, seamless travel
              arrangements, and a perfect mix of coastal and countryside
              experiences, this trip promises to showcase Goa’s rich and diverse
              soul like never before!
            </p>
            <p>
              <a href="#">Hotel Description</a> | 3 Star Hotel |{" "}
              <a href="#">Show Map</a>
            </p>
          </div>
        </div>

        <div className="package1-section">
          <div className="package1-package-includes">
            <h2>Package Includes</h2>
            <div className="package1-sub-header"></div>
            <div className="package1-badges">
              <span className="package1-badge">
                <i className="fas fa-bed"></i> 3 Star
              </span>
              <span className="package1-badge">
                <i className="fas fa-utensils"></i> Breakfast
              </span>
              <span className="package1-badge">
                <i className="fas fa-car"></i> Cab
              </span>
              <span className="package1-badge">
                <i className="fas fa-wifi"></i> Wifi
              </span>
            </div>
          </div>

          <div className="package1-group-tour-packages">
            <h2>Group Tour Packages</h2>
            <div className="package1-sub-header"></div>
            <p>
              <strong>Resort Type:</strong> 3 Star or Similar
            </p>
            <p>
              <strong>Given Resort:</strong> RIVA GOLD COAST CANDOLIM
            </p>
          </div>
        </div>

        <div className="package1-inclusions-exclusions">
          <div className="package1-inclusions">
            <h2>Inclusions</h2>
            <div className="package1-sub-header"></div>
            <ul>
              <li>Welcome drinks on arrival. (Non–alcoholic)</li>
              <li>
                Airport/Railway Station/Volvo Stand Transfers Both Way By AC
                Coach/Car.
              </li>
              <li>Daily buffet breakfast at Hotel and Resort.</li>
              <li>Tea/Coffee maker with replenishment once in a day.</li>
              <li>
                Accommodation in well-appointed air-conditioned rooms with Flat
                screen television, Electronic Safe, telephone, satellite
                connection.
              </li>
              <li>
                Complimentary use of the swimming pool (with proper swimwear)
                and gymnasium.
              </li>
              <li>North Goa Sightseeing by Private AC Car.</li>
              <li>South Goa Sightseeing by Private AC Car.</li>
              <li>All applicable taxes.</li>
            </ul>
          </div>

          <div className="package1-exclusions">
            <h2>Exclusions</h2>
            <div className="package1-sub-header"></div>
            <ul>
              <li>Anything not mentioned under 'Package Inclusions'.</li>
              <li>
                Cost incidental to any change in the itinerary/stay on account
                of flight cancellation due to bad weather, ill health,
                roadblocks, and/or any factors beyond control.
              </li>
              <li>Any expenses of a personal nature.</li>
            </ul>
          </div>
        </div>

        {/* Tabs for Itinerary and Terms & Conditions */}
        <div className="package1-tabs">
          <button
            className={`package1-tab ${
              activeTab === "itinerary" ? "active" : ""
            }`}
            onClick={() => toggleTab("itinerary")}
          >
            Itinerary
          </button>
          <button
            className={`package1-tab ${activeTab === "terms" ? "active" : ""}`}
            onClick={() => toggleTab("terms")}
          >
            Terms & Conditions
          </button>
        </div>

        {/* Conditional rendering of Itinerary */}
        {activeTab === "itinerary" && (
          <div className="package1-itinerary">
            <h2>Itinerary</h2>
            <div className="package1-sub-header"></div>

            <h3>Day 1: Arrival in Goa</h3>
            <p>
              On your arrival at Dabolim Airport / Madgaon Rly station / Thivim
              Rly Station / Vasco Railway Station / Karmali Rly Station/ Panjim
              Bus Stop / Mapusa Bus Stop in Goa, meet the tour representative
              and be assisted with transfer to the hotel. Check-in to the hotel
              and relax. Rest of the day is free to enjoy at your own leisure.
              You can head out to enjoy the crystal clear beaches of Goa in the
              evening.
            </p>

            <h3>Day 1: North Goa Tour by Private AC Car</h3>
            <p>
              Breakfast at Hotel and after some leisure leave for North Goa Tour
              at around (10:30 am to 6 pm)
            </p>
            <p>
              <strong>Places covered:</strong>
            </p>
            <ul>
              <li>Dolphin Trip (Entry ticket at own cost)</li>
              <li>Fort Aguada</li>
              <li>Candolim Beach</li>
              <li>Calangute Beach</li>
              <li>Snow Park (Entry ticket at own cost)</li>
              <li>Lunch Break at Goa Restaurant</li>
              <li>Baga Beach</li>
              <li>Anjuna Beach</li>
              <li>Vagator Beach/Chapora Fort</li>
            </ul>
            <p>Later Drop Back to Hotel, Overnight Stay At The Hotel.</p>

            <h3>Day 2: South Goa Sightseeing By Private AC Car</h3>
            <p>
              Breakfast at Hotel and after some leisure Depart for South Goa
              Tour at around (10:00 am to 6 pm)
            </p>
            <p>
              <strong>Places covered:</strong>
            </p>
            <ul>
              <li>Old Goa churches</li>
              <li>Wax museum (tickets at Own Cost)</li>
              <li>Mount Mary church</li>
              <li>Miramar Beach</li>
              <li>Dona Paula jetty</li>
              <li>
                Filmi Chakkar with Boat cruise (11AM to 12PM, Entry ticket at
                own cost)
              </li>
              <li>Sahakari Spice Farm (Entry ticket at own cost)</li>
              <li>Kala academy</li>
              <li>Mangueshi temple</li>
              <li>Shantadurga Temple</li>
              <li>Panjim church, market</li>
              <li>
                Boat Cruise at Mandovi River (06 PM to 07 PM, Entry Ticket at
                own cost)
              </li>
            </ul>
            <p>
              Later drop back to hotel. (We can also take you for shopping at
              Mall de Goa while returning to the hotel).
            </p>

            <h3>Day 3: Discover Goa at your complete Leisure (no transport)</h3>
            <p>
              You are free to enjoy the day at your own leisure. Indulge
              yourself in activities of your choice. Exhilarate in various
              amenities proffered by the resort. Additionally, have
              mouthwatering food and enjoy walking around the sea coast.
            </p>
            <p>Overnight stay at the hotel.</p>

            <h3>Day 4: Departure from Goa</h3>
            <p>
              After having a lavish breakfast in the morning, check out from the
              hotel. You are free to board the flight, Train, or Bus to home.
            </p>
          </div>
        )}

        {/* Conditional rendering of Terms & Conditions */}
        {activeTab === "terms" && (
          <div className="package1-terms">
            <h2>Terms & Conditions</h2>
            <div className="package1-sub-header"></div>
            <p>
              <strong>1. Package Price:</strong> The prices are inclusive of all
              taxes and fees.
            </p>
            <p>
              <strong>2. Payment:</strong> 50% advance required at the time of
              booking. Balance before 7 days of travel.
            </p>
            <p>
              <strong>3. Cancellations:</strong> Cancellation charges apply
              according to the tour policy.
            </p>
            <p>
              <strong>4. Travel Documents:</strong> Ensure that you carry valid
              identification and tickets.
            </p>
            <p>
              <strong>5. Insurance:</strong> Travel insurance is recommended but
              not mandatory.
            </p>
            {/* Add more terms and conditions as needed */}
          </div>
        )}

        <div className="package1-price-box">
          <p>Starting from</p>
          <div className="package1-price">INR 7,999</div>
          <Link to="/book-now" className="package1-button">
            Book Now!
          </Link>
        </div>
      </div>
    </>
  );
}
