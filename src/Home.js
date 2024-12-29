import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import DestinationCardSlider from "./components/Destination/DestinationCardSlider";
import ExperienceCardSlider from "./components/Experience/ExperienceCardSlider";
import Review from "./components/Review/Review";
import Carousal from "./components/Carousal";
import Packages from "./components/Packages";
import SearchBar from "./components/SearchBar";
import AttractionsSlider from "./components/Attractions/AttractionsSlider";
import Att from "./components/Attractions/AttractionsInfo";
import Hinterland from "./components/Hinterland/HinterlandInfo";
import Itineraries from "./components/Itineraries/Itineraries";

const Home = () => {
  const location = useLocation(); // Access the location object to read query params
  const [userName, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // State to track admin status

  useEffect(() => {
    // Get the name from query parameters
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");
    if (name) {
      setUserName(name); // Set the username from the query param
    }
    // Check if the user is an admin (you can use a real authentication method here)
    const adminStatus = localStorage.getItem("isAdminLoggedIn");
    setIsAdmin(adminStatus === "true"); // Assuming we store admin login status in localStorage
  }, [location]);

  return (
    <>
      <Carousal />
      <SearchBar />
      <Att />
      <Hinterland />
      <Itineraries />
      <Packages />
      <ExperienceCardSlider />
      <Review />
      {/* Display a welcome message if the user's name is available */}
      {userName && <h1>Welcome, {userName}!</h1>}

      {/* Admin link */}
      {isAdmin && (
        <div>
          <Link to="/admin-dashboard">Go to Admin Dashboard</Link>
        </div>
      )}
    </>
  );
};

export default Home;
