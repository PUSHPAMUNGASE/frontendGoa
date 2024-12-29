import React, { useState } from "react";
import UserForm from "./UserForm";

const UserMenu = () => {
  const [action, setAction] = useState(null);

  const resetAction = () => {
    setAction(null);
  };

  return (
    <div className="user-menu">
      {!action && (
        <div>
          <h2>User</h2>
          <button onClick={() => setAction("signup")}>Sign Up</button>
          <button onClick={() => setAction("login")}>Login</button>
        </div>
      )}
      {action === "signup" && <UserForm type="signup" setAction={setAction} />}
      {action === "login" && <UserForm type="login" setAction={setAction} />}
      {action && (
        <button onClick={resetAction} style={{ marginTop: "20px" }}>
          Back
        </button>
      )}
    </div>
  );
};

export default UserMenu;
