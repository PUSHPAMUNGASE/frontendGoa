import React, { useState } from "react";
import { AttractionsInfo as initialAttractions } from "../components/Attractions/AttractionsInfo";
import "./ManageContent.css";

const ManageAttractions = () => {
  const [attractions, setAttractions] = useState(initialAttractions);
  const [newAttraction, setNewAttraction] = useState({
    name: "",
    location: "",
    description: "",
    image: "",
  });

  // Add a new attraction
  const addAttraction = (e) => {
    e.preventDefault();
    if (
      newAttraction.name &&
      newAttraction.location &&
      newAttraction.description
    ) {
      setAttractions([
        ...attractions,
        {
          ...newAttraction,
          id: Date.now(),
          image: newAttraction.image || "https://via.placeholder.com/150",
        },
      ]);
      setNewAttraction({ name: "", location: "", description: "", image: "" });
    } else {
      alert("Please fill all fields before adding an attraction.");
    }
  };

  // Delete an attraction
  const deleteAttraction = (id) => {
    setAttractions(attractions.filter((attraction) => attraction.id !== id));
  };

  // Edit an attraction
  const editAttraction = (id) => {
    const newDescription = prompt("Enter a new description:");
    if (newDescription) {
      setAttractions(
        attractions.map((attraction) =>
          attraction.id === id
            ? { ...attraction, description: newDescription }
            : attraction
        )
      );
    }
  };

  return (
    <div className="manage-attractions">
      <h2>Manage Attractions</h2>

      <form className="add-attraction-form" onSubmit={addAttraction}>
        <h3>Add New Attraction</h3>
        <input
          type="text"
          placeholder="Name"
          value={newAttraction.name}
          onChange={(e) =>
            setNewAttraction({ ...newAttraction, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Location"
          value={newAttraction.location}
          onChange={(e) =>
            setNewAttraction({ ...newAttraction, location: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Description"
          value={newAttraction.description}
          onChange={(e) =>
            setNewAttraction({ ...newAttraction, description: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          value={newAttraction.image}
          onChange={(e) =>
            setNewAttraction({ ...newAttraction, image: e.target.value })
          }
        />
        <button type="submit">Add Attraction</button>
      </form>

      {attractions.length > 0 ? (
        <ul className="attractions-list">
          {attractions.map((attraction) => (
            <li key={attraction.id} className="attraction-item">
              <div className="attraction-details">
                <img
                  src={attraction.image || "https://via.placeholder.com/150"}
                  alt={attraction.name}
                  className="attraction-image"
                />
                <div>
                  <strong style={{ color: attraction.name ? "black" : "gray" }}>
                    {attraction.name || "Unnamed Attraction"}
                  </strong>
                  <p>{attraction.location}</p>
                  <p>{attraction.description}</p>
                </div>
              </div>
              <div className="action-buttons">
                <button
                  className="edit-button"
                  onClick={() => editAttraction(attraction.id)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => deleteAttraction(attraction.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No attractions available. Add some attractions to display here.</p>
      )}
    </div>
  );
};

export default ManageAttractions;
