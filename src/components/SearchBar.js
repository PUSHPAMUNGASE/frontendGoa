import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [activeTab, setActiveTab] = useState("Search All");
  const [searchQuery, setSearchQuery] = useState("");
  const [checkInDate, setCheckInDate] = useState("2024-12-30"); // default check-in date
  const [checkOutDate, setCheckOutDate] = useState("2024-12-31"); // default check-out date

  const tabs = [
    { label: "Search All", icon: "🏠" },
    { label: "Hotels", icon: "🛏️" },
    { label: "Restaurants", icon: "🍽️" },
    { label: "Flights", icon: "✈️" },
    { label: "Holiday Homes", icon: "🏡" },
    { label: "Trains", icon: "🚂" },
  ];

  const headings = {
    "Search All": "Where to?",
    Hotels: "Find the Perfect Hotel",
    Restaurants: "Discover Great Restaurants",
    Flights: "Book Your Flight",
    "Holiday Homes": "Explore Holiday Homes",
    Trains: "Book Your Train Ticket",
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCheckInChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // If search query is empty, don't do anything
    if (!searchQuery.trim()) {
      return;
    }

    // Normalize the query to lowercase for case-insensitive comparison
    const query = searchQuery.trim().toLowerCase();

    if (
      query.includes("hotel") ||
      query.includes("hotels in north goa") ||
      query.includes("hotels in south goa")
    ) {
      // If it's a hotel search, construct Agoda search URL
      const destination = encodeURIComponent(searchQuery); // Keep the original search query to pass as the destination
      const checkinDate = checkInDate;
      const checkoutDate = checkOutDate;

      // Construct the Agoda URL for the search page with the search query, check-in and check-out dates
      const agodaSearchUrl = `https://www.agoda.com/search?city=${destination}&checkin_date=${checkinDate}&checkout_date=${checkoutDate}`;
      window.location.href = agodaSearchUrl;
    } else if (query.includes("train")) {
      // If the search query contains "train", redirect to a train search page
      const trainSearchUrl = `https://www.irctc.co.in`;
      window.location.href = trainSearchUrl;
    } else {
      // If it's a destination (like "Arambol" or "Morjim"), redirect to the custom page
      if (query === "arambol") {
        window.location.href = "/arambol-beach";
      } else if (query === "morjim") {
        window.location.href = "/morjim-beach";
      } else {
        // Default fallback if destination is not found
        window.location.href = "/";
      }
    }
  };

  const handleBookFlight = () => {
    // Redirect to Skyscanner when the button is clicked
    window.location.href = "https://www.skyscanner.com";
  };

  const handleBookHolidayHomes = () => {
    // Redirect to Airbnb when the button is clicked
    window.location.href = "https://www.airbnb.com";
  };

  const handleBookTrain = () => {
    // Redirect to IRCTC when the button is clicked
    window.location.href = "https://www.irctc.co.in";
  };

  // Set the placeholder based on the active tab
  const getPlaceholderText = () => {
    if (activeTab === "Hotels") {
      return "Enter hotel name";
    } else if (activeTab === "Restaurants") {
      return "Enter restaurant, cuisine, dish";
    } else {
      return "Search for something...";
    }
  };

  return (
    <div className="search-container">
      <h1 className="title">{headings[activeTab]}</h1>

      {/* Tabs */}
      <div className="tabs">
        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`tab ${activeTab === tab.label ? "active" : ""}`}
            onClick={() => setActiveTab(tab.label)}
          >
            <span>{tab.icon}</span> {tab.label}
          </div>
        ))}
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        {activeTab !== "Flights" &&
          activeTab !== "Holiday Homes" &&
          activeTab !== "Trains" && (
            <>
              <input
                type="text"
                placeholder={getPlaceholderText()}
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />

              {/* Check-in and Check-out Dates */}
              {activeTab === "Hotels" && (
                <div className="dates">
                  <input
                    type="date"
                    className="checkin-date"
                    value={checkInDate}
                    onChange={handleCheckInChange}
                  />
                  <input
                    type="date"
                    className="checkout-date"
                    value={checkOutDate}
                    onChange={handleCheckOutChange}
                  />
                </div>
              )}

              {/* Search Button for Search All, Hotels, Restaurants */}
              {activeTab !== "Flights" &&
                activeTab !== "Holiday Homes" &&
                activeTab !== "Trains" && (
                  <button
                    className="search-button"
                    onClick={handleSearchSubmit}
                  >
                    Search
                  </button>
                )}
            </>
          )}

        {/* Book Flight Button (Only in Flights Tab) */}
        {activeTab === "Flights" && (
          <div className="flight-booking">
            <button className="book-flight-button" onClick={handleBookFlight}>
              Hit to Book Flights
            </button>
          </div>
        )}

        {/* Book Holiday Homes Button (Only in Holiday Homes Tab) */}
        {activeTab === "Holiday Homes" && (
          <div className="holiday-home-booking">
            <button
              className="book-holiday-home-button"
              onClick={handleBookHolidayHomes}
            >
              Hit to Book Holiday Homes
            </button>
          </div>
        )}

        {/* Book Train Button (Only in Trains Tab) */}
        {activeTab === "Trains" && (
          <div className="train-booking">
            <button className="book-train-button" onClick={handleBookTrain}>
              Hit to Book Train
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
