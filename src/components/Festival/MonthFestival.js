import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // ✅ Import axios
import "./MonthFestival.css"; // ✅ Ensure this file exists

const MonthFestival = () => {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [festivals, setFestivals] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/api/festivals/month/${selectedMonth}`);
        setFestivals(response.data);
      } catch (error) {
        console.error("Error fetching festivals:", error);
      }
    };

    fetchFestivals();
  }, [selectedMonth]);

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
  };

  const handleCardClick = (festival) => {
    navigate("/month-festival-details", { state: { festival } }); // ✅ Ensure this route exists in App.js
  };

  return (
    <div className="month-festival-container">
      <h1 className="festival-header">Festivals and Events of Goa</h1>

      {/* Month Filter Buttons */}
      <div className="month-buttons">
        {[
          "January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December",
        ].map((month) => (
          <button
            key={month}
            className={`month-btn ${selectedMonth === month ? "active" : ""}`}
            onClick={() => handleMonthClick(month)}
          >
            {month}
          </button>
        ))}
      </div>

      {/* Festival Cards */}
      <div className="festival-cards">
        {festivals.length > 0 ? (
          festivals.map((festival) => (
            <div
              className="festival-card"
              key={festival.id}
              onClick={() => handleCardClick(festival)}
            >
              <img
                src={festival.imageUrl || "https://via.placeholder.com/400"}
                alt={festival.name}
                className="festival-image"
              />
              <div className="festival-info">
                <h3>{festival.name}</h3>
                <p className="festival-description">{festival.description || "No description available."}</p>
              </div>
              <button
                className="festival-btn"
                onClick={() => navigate("festival/festival-details", { state: { festival } })}
              >
                Check More!!!
              </button>
            </div>
          ))
        ) : (
          <p>No festivals found for {selectedMonth}.</p>
        )}
      </div>
    </div>
  );
};

export default MonthFestival;
