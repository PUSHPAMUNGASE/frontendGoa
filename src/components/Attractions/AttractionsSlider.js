// import React from "react";
// import "./AttractionsSlider.css";
// import { Carousel } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const AttractionsSlider = ({ attractions }) => {
//   const navigate = useNavigate(); // React Router hook for navigation

//   const handleRedirect = (path) => {
//     navigate(path); // Navigate to the specified route
//   };

//   return (
//     <div className="attractions-container">
//       <h1>ATTRACTIONS</h1>
//       <p>— worth a thousand stories —</p>
//       <div className="carousel-container">
//         <Carousel interval={2000}>
//           {attractions.map((attraction) => (
//             <Carousel.Item
//               key={attraction.id}
//               onClick={() => handleRedirect(attraction.route)} // Navigate to the route
//               style={{ cursor: "pointer" }} // Indicate clickable item
//             >
//               <img
//                 className="d-block w-100"
//                 src={attraction.image || "https://via.placeholder.com/1080x720"}
//                 alt={attraction.name}
//               />
//               <Carousel.Caption>
//                 <h3>{attraction.name}</h3>
//                 {/* <p>{attraction.description}</p> */}
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default AttractionsSlider;





// import React, { useState, useEffect } from 'react';
// import './AttractionsSlider.css';
// import { Carousel } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const AttractionsSlider = () => {
//   const [attractions, setAttractions] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAttractions = async () => {
//       try {
//         const response = await fetch('http://localhost:8081/attractions/all');
//         const data = await response.json();
//         setAttractions(data);
//       } catch (error) {
//         console.error('Error fetching attractions:', error);
//       }
//     };

//     fetchAttractions();
//   }, []);

//   const handleRedirect = (path) => {
//     navigate(path);
//   };

//   return (
//     <div className="attractions-container">
//       <h1>ATTRACTIONS</h1>
//       <p>— worth a thousand stories —</p>
//       <div className="carousel-container">
//         <Carousel interval={2000}>
//           {attractions.map((attraction) => (
//             <Carousel.Item
//               key={attraction.id}
//               onClick={() => handleRedirect(attraction.route)}
//               style={{ cursor: 'pointer' }}
//             >
//               <img
//                 className="d-block w-100"
//                 src={attraction.imageUrl || 'https://via.placeholder.com/1080x720'}
//                 alt={attraction.name}
//               />
//               <Carousel.Caption>
//                 <h3>{attraction.name}</h3>
//               </Carousel.Caption>
//             </Carousel.Item>
//           ))}
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default AttractionsSlider;






import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AttractionsSlider.css';
import { Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AttractionsSlider = () => {
  const [attractions, setAttractions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get('http://localhost:8081/attractions/all');
        const data = response.data.map(attraction => ({
          ...attraction,
          imageUrl: `http://localhost:8081${attraction.imageUrl}`
        }));
        setAttractions(data);
      } catch (error) {
        console.error('Error fetching attractions:', error);
      }
    };

    fetchAttractions();
  }, []);

  const handleRedirect = (path) => {
    navigate(path);
  };

  return (
    <div className="attractions-container">
      <h1>ATTRACTIONS</h1>
      <p>— worth a thousand stories —</p>
      <div className="carousel-container">
        <Carousel interval={2000}>
          {attractions.map((attraction) => (
            <Carousel.Item
              key={attraction.id}
              onClick={() => handleRedirect(attraction.route)}
              style={{ cursor: 'pointer' }}
            >
              <img
                className="d-block w-100"
                src={attraction.imageUrl || 'https://via.placeholder.com/1080x720'}
                alt={attraction.name}
              />
              <Carousel.Caption>
                <h3>{attraction.name}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default AttractionsSlider;
