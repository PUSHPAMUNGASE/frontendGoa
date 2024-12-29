// src/pages/ManageContent.js
import React, { useState } from "react";
import "./ManageContent.css";
import ManageAttractions from "./ManageAttractions"; // Attractions management component

const ManageContent = () => {
  const [activeTab, setActiveTab] = useState("Attractions");

  // Handle tab switching
  const renderContent = () => {
    switch (activeTab) {
      case "Attractions":
        return <ManageAttractions />;
      case "Hinterland":
        return <div>Hinterland management coming soon...</div>;
      case "Packages":
        return <div>Package management coming soon...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="manage-content">
      <h1>Manage Content</h1>
      <div className="tabs">
        <button
          className={activeTab === "Attractions" ? "active" : ""}
          onClick={() => setActiveTab("Attractions")}
        >
          Attractions
        </button>
        <button
          className={activeTab === "Hinterland" ? "active" : ""}
          onClick={() => setActiveTab("Hinterland")}
        >
          Hinterland
        </button>
        <button
          className={activeTab === "Packages" ? "active" : ""}
          onClick={() => setActiveTab("Packages")}
        >
          Packages
        </button>
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  );
};

export default ManageContent;
