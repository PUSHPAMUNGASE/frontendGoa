// src/pages/AdminDashboard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [recentActivities, setRecentActivities] = useState([]);

  const dashboardData = {
    totalUsers: 120,
    totalFeedback: 75,
    pendingContent: 5,
  };

  useEffect(() => {
    const loginTime = localStorage.getItem("lastLoginTime");
    if (loginTime) {
      setRecentActivities((prev) => [
        ...prev,
        `User logged in at ${new Date(loginTime).toLocaleString()}`,
      ]);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("lastLoginTime");
    navigate("/home");
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
          <li>
            <button onClick={() => navigate("/admin-dashboard")}>
              Dashboard
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/manage-users")}>
              Manage Users
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/manage-content")}>
              Manage Content
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/handle-feedback")}>
              Handle Feedback
            </button>
          </li>
        </ul>
      </div>

      <div className="content">
        <h1>Welcome to the Admin Dashboard</h1>

        <div className="overview">
          <h2>Overview</h2>
          <div className="overview-item">
            <p>Total Users: {dashboardData.totalUsers}</p>
          </div>
          <div className="overview-item">
            <p>Total Feedback: {dashboardData.totalFeedback}</p>
          </div>
          <div className="overview-item">
            <p>Pending Content: {dashboardData.pendingContent}</p>
          </div>
        </div>

        <div className="quick-actions">
          <h2>Quick Actions</h2>
          <button onClick={() => navigate("/manage-users")}>
            Manage Users
          </button>
          <button onClick={() => navigate("/manage-content")}>
            Manage Content
          </button>
          <button onClick={() => navigate("/handle-feedback")}>
            Handle Feedback
          </button>
        </div>

        <div className="recent-activity">
          <h2>Recent Activity</h2>
          <ul>
            {recentActivities.length > 0 ? (
              recentActivities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))
            ) : (
              <li>No recent activity</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
