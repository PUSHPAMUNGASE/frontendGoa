import React, { useState, useEffect } from "react";
import axios from "axios";

const HotelImages = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8081/hotel-images/all")
      .then((response) => {
        setImages(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch images");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={styles.container}>
      <h2>Hotel Images</h2>
      <div style={styles.grid}>
        {images.map((image) => (
          <div key={image.id} style={styles.card}>
            <img src={image.imageUrl} alt="Hotel" style={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
    justifyContent: "center",
  },
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
  },
  image: { width: "100%", borderRadius: "5px" },
};

export default HotelImages;
