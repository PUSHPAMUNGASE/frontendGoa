import React, { useState, useEffect } from "react";
import "./ManageUsers.css"; // Import CSS styles

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editedUserData, setEditedUserData] = useState({ name: "", email: "" });

  // Fetch user data from localStorage (assuming the user is logged in)
  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    }

    // Example users data (You would typically fetch this from an API)
    const fetchedUsers = [
      {
        id: 1,
        name: "Neelesh Pataki",
        email: "admin@vivagoa.com",
        role: "Admin",
      },
      {
        id: 2,
        name: "Neelesh Patki",
        email: "neeleshpatki@gmail.com",
        role: "User",
      },
      { id: 3, name: "Pratik Pawar", email: "pratik@gmail.com", role: "User" },
    ];
    setUsers(fetchedUsers);
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleEdit = (user) => {
    setEditingUser(user);
    setEditedUserData({ name: user.name, email: user.email });
  };

  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleSaveChanges = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUser.id
          ? { ...user, name: editedUserData.name, email: editedUserData.email }
          : user
      )
    );
    setEditingUser(null);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div className="manage-users">
      <h1>Manage Users</h1>

      {/* Display logged-in user details */}
      {currentUser && (
        <div className="current-user">
          <h2>Logged in as: {currentUser.name}</h2>
          <p>Email: {currentUser.email}</p>
          <p>Role: {currentUser.role}</p>
        </div>
      )}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={handleSearch}
        />
      </div>

      {/* Display user data in a table */}
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(user)}>
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No users found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Edit User Modal */}
      {editingUser && (
        <div className="edit-modal">
          <h3>Edit User</h3>
          <div className="edit-form">
            <label>Name:</label>
            <input
              type="text"
              value={editedUserData.name}
              onChange={(e) =>
                setEditedUserData({ ...editedUserData, name: e.target.value })
              }
            />
            <label>Email:</label>
            <input
              type="email"
              value={editedUserData.email}
              onChange={(e) =>
                setEditedUserData({ ...editedUserData, email: e.target.value })
              }
            />
            <button className="save-btn" onClick={handleSaveChanges}>
              Save Changes
            </button>
            <button className="cancel-btn" onClick={handleCancelEdit}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
