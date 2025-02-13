import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./MonthFestivalDetails.css";

const MonthFestivalDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [festival, setFestival] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const festivalData = location.state?.festival;
    if (festivalData) {
      setFestival(festivalData);
    } else {
      console.warn("No festival data found! Redirecting...");
      setTimeout(() => navigate(-1), 2000);
    }
  }, [location.state, navigate]);

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  if (!festival) {
    return (
      <div className="error-container">
        <p className="error-message">Festival not found. Redirecting...</p>
        <button onClick={() => navigate(-2)} className="back-button">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="festival-detail-container">
      <h1 className="festival-title">{festival.name}</h1>
      <img
        src={festival.imageUrl || "https://via.placeholder.com/400"} 
        alt={festival.name}
        className="festival-detail-image"
      />

      <div className="festival-info">
        <p className="festival-description">
          {festival.description || "No description available."}
        </p>

        <div className="festival-details">
          <p>
            <strong>Type:</strong>{" "}
            {festival.festivalDetail?.type || "Cultural Festival"}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {festival.festivalDetail?.date || "Varies"}
          </p>
          <p>
            <strong>Location:</strong>{" "}
            {festival.festivalDetail?.location || "Goa, India"}
          </p>
        </div>

        <h3>About {festival.name}</h3>
        <p className="festival-content">
          {festival.festivalDetail?.content ||
            "Experience the vibrant traditions and cultural celebrations of Goa!"}
        </p>

        <h3>Historical Significance</h3>
        <p className="festival-history">
          {festival.festivalDetail?.history ||
            "This festival has deep historical roots, reflecting Goa's rich cultural and religious heritage."}
        </p>

        <h3>Local Traditions & Rituals</h3>
        <p className="festival-traditions">
          {festival.festivalDetail?.traditions ||
            "Traditional performances, music, and dance are integral parts of this festival."}
        </p>

        {/* Comment Section */}
        <div className="festival-comments">
          <h3>Share Your Experience</h3>
          <textarea
            placeholder="Write your thoughts about this festival..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button onClick={handleCommentSubmit}>Submit</button>

          {comments.length > 0 && (
            <div className="comment-section">
              <h4>Visitor Comments</h4>
              <ul>
                {comments.map((cmt, index) => (
                  <li key={index}>{cmt}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MonthFestivalDetails;