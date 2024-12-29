// src/pages/HandleFeedback.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HandleFeedback = () => {
  const navigate = useNavigate();
  const [feedbacks, setFeedbacks] = useState([]);

  // Example function to fetch feedback
  useEffect(() => {
    const fetchedFeedbacks = [
      { id: 1, user: "JohnDoe", message: "Great experience!" },
      { id: 2, user: "JaneSmith", message: "Needs improvement." },
    ];
    setFeedbacks(fetchedFeedbacks);
  }, []);

  return (
    <div className="handle-feedback">
      <h1>Handle Feedback</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User</th>
            <th>Message</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td>{feedback.id}</td>
              <td>{feedback.user}</td>
              <td>{feedback.message}</td>
              <td>
                <button onClick={() => alert("Respond to feedback")}>
                  Respond
                </button>
                <button onClick={() => alert("Delete feedback")}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HandleFeedback;
