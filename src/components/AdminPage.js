// import React from "react";
// import AdminForm from "./AdminForm";

// const AdminPage = () => {
//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <AdminForm />
//     </div>
//   );
// };

// export default AdminPage;



import React from "react";
import AdminForm from "./AdminForm";
import "./AdminPage.css"; // Import the CSS file

const AdminPage = () => {
  return (
    <div className="admin-page-container">
      {/* <h2>Admin Login</h2> */}
      <AdminForm />
    </div>
  );
};

export default AdminPage;

