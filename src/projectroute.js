import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Login from "./components/Login";
import Register from "./components/Register";
import DestinationDetailPage from "./components/Destination/DestinationDetailPage";
import FinalDestinations from "./components/FinalDestinations";
import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";
import Review from "./components/Review/Review";
import MenuContent from "./components/NavbarContent/MenuContent";
import Menurouting from "./components/NavbarContent/Menurouting";

import SouthGoaPackage from "./PackagesDetails/SouthGoaPackage";
import Honeymoon from "./PackagesDetails/Honeymoon";
import Package1 from "./PackagesDetails/Package1";
import FamilyPackage from "./PackagesDetails/FamilyPackage";
import NorthGoaPackage from "./PackagesDetails/NorthGoaPackage";
import HinterlanGoaPackage from "./PackagesDetails/HinterlanGoaPackage";
import Packages from "./components/Packages";
import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
import Arambol from "./components/Attractions/Arambol";
import Morjim from "./components/Attractions/Morjim";
import Chapora from "./components/Attractions/Chapora";
import UserPage from "./components/UserPage";
import AdminPage from "./components/AdminPage";
import AdminDashboard from "./components/AdminDashboard";
import ManageUsers from "./components/ManageUsers";
import ManageContent from "./components/ManageContent";
import UserMenu from "./components/UserMenu";
import HandleFeedback from "./components/HandleFeedback";
import GoaDestination from "./components/GoaDestinations/GoaDestination";
import BookNow from "./PackagesDetails/BookNow";

const projectroute = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> }, // Home page
      {
        path: "destination/:destinationId",
        element: <DestinationDetailPage />,
      },
      { path: "destination", element: <DestinationCardSlider /> },
      { path: "experiences", element: <ExperienceCardSlider /> },
      { path: "reviews", element: <Review /> },
      { path: "menu", element: <MenuContent /> },
      { path: "packages", element: <Packages /> },
      { path: "/routing", element: <Menurouting /> },
      { path: "/login", element: <Login /> }, // Login page
      { path: "/register", element: <Register /> }, // Register page
      { path: "/home", element: <Home /> },
      {
        path: "/user",
        element: <UserPage />,
      },
      {
        path: "/admin",
        element: <AdminPage />, // Admin login page
      },
      {
        path: "/group-tour-package",
        element: <Package1 />,
      },
      {
        path: "/family-tour-package",
        element: <FamilyPackage />,
      },
      {
        path: "/honeymoon-tour-package",
        element: <Honeymoon />,
      },
      {
        path: "/north-goa-tour-package",
        element: <NorthGoaPackage />,
      },
      {
        path: "/south-goa-tour-package",
        element: <SouthGoaPackage />,
      },
      {
        path: "/hinterland-goa-tour-package",
        element: <HinterlanGoaPackage />,
      },
      {
        path: "/arambol-beach",
        element: <Arambol />,
      },
      {
        path: "/morjim-beach",
        element: <Morjim />,
      },
      {
        path: "/chapora-fort",
        element: <Chapora />,
      },
      {
        path: "/manage-users",
        element: <ManageUsers />,
      },
      {
        path: "/manage-content",
        element: <ManageContent />,
      },
      {
        path: "/handle-feedback",
        element: <HandleFeedback />,
      },
      {
        path: "/goa-destination",
        element: <GoaDestination />,
      },
      {
        path: "/book-now",
        element: <BookNow />,
      },

      // Admin Routes
      {
        path: "/admin-dashboard",
        element: <AdminDashboard />, // Admin Dashboard page
        children: [
          { path: "manage-users", element: <ManageUsers /> }, // Manage Users page
          { path: "manage-content", element: <ManageContent /> }, // Manage Content page
        ],
      },
    ],
  },
]);

export default projectroute;
