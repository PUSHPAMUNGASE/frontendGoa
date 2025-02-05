//  import React from "react";
//  import { useParams, useNavigate } from "react-router-dom";
// import sunset from "../../assets/Experience/sunset.jpg";
// import scuba from "../../assets/Experience/scuba.jpeg";
// import parasailing from "../../assets/Experience/parasailing.jpg";

// const goaExperiences = [
//   {
//     id: 1,
//     name: "Sunset Cruise",
//     category: "Adventure",
//     description: "A beautiful sunset cruise along the Goan coastline.",
//     image: sunset,
//     rating: 4.5,
//     details: {
//       duration: "2 hours",
//       location: "Goan coastline",
//       price: "₹1500 per person",
//       safety: "Life jackets provided, experienced crew",
//       reviews: ["Great experience!", "Highly recommend."],
//       bookingContact: "contact@sunsetcruisegoa.com",
//     },
//   },
//   {
//     id: 2,
//     name: "Scuba Diving",
//     category: "Adventure",
//     description: "Explore the underwater world with an exciting scuba diving experience.",
//     image: scuba,
//     rating: 4.7,
//     details: {
//       duration: "3 hours",
//       location: "Palolem Beach",
//       price: "₹3500 per person",
//       safety: "Certified instructors, diving gear provided",
//       reviews: ["Amazing underwater experience.", "Professional and safe."],
//       bookingContact: "scubadive@goa.com",
//     },
//   },
//   {
//     id: 3,
//     name: "Parasailing",
//     category: "Adventure",
//     description: "Feel the rush of adrenaline as you soar high above the ocean.",
//     image: parasailing,
//     rating: 4.6,
//     details: {
//       duration: "30 minutes",
//       location: "Baga Beach",
//       price: "₹2000 per person",
//       safety: "Safety harness, trained instructor",
//       reviews: ["Thrilling experience!", "Must try for adventure lovers."],
//       bookingContact: "parasailing@goa.com",
//     },
//   },
// ];

// function ExperienceDetails() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const experience = goaExperiences.find((exp) => exp.id === parseInt(id));

//   if (!experience) {
//     return <h2>Experience Not Found</h2>;
//   }

//   return (
//     <div className="experience-details">
//       <button onClick={() => navigate(-1)}>🔙 Go Back</button>
//       <h1>{experience.name}</h1>
//       <img src={experience.image} alt={experience.name} />
//       <p>{experience.description}</p>
//       <p><strong>Location:</strong> {experience.details.location}</p>
//       <p><strong>Duration:</strong> {experience.details.duration}</p>
//       <p><strong>Price:</strong> {experience.details.price}</p>
//       <p><strong>Safety:</strong> {experience.details.safety}</p>
//       <p><strong>Reviews:</strong></p>
//       <ul>
//         {experience.details.reviews.map((review, index) => (
//           <li key={index}>{review}</li>
//         ))}
//       </ul>
//       <p><strong>Contact for Booking:</strong> {experience.details.bookingContact}</p>
//     </div>
//   );
// }

// export default ExperienceDetails;


// //  const [selectedExperience, setSelectedExperience] = useState(null);
// //    const [selectedCategory, setSelectedCategory] = useState("Adventure");

// // {selectedExperience && (
// //   <div className="experience-detail">
// //     <h2>{selectedExperience.name}</h2>
// //     <p>{selectedExperience.description}</p>
// //     <img
// //       src={selectedExperience.image}
// //       alt={selectedExperience.name}
// //       className="detail-image"
// //     />
// //     <div className="experience-info">
// //       <h3>Details</h3>
// //       <p><strong>Duration:</strong> {selectedExperience.details.duration}</p>
// //       <p><strong>Location:</strong> {selectedExperience.details.location}</p>
// //       <p><strong>Price:</strong> {selectedExperience.details.price}</p>
// //       <p><strong>Safety Measures:</strong> {selectedExperience.details.safety}</p>
// //       <h3>User Reviews</h3>
// //       <ul>
// //         {selectedExperience.details.reviews.map((review, index) => (
// //           <li key={index}>{review}</li>
// //         ))}
// //       </ul>
// //       <p><strong>Booking Contact:</strong> {selectedExperience.details.bookingContact}</p>
// //     </div>
// //   </div>
// // )}


// // export default ExperienceDetails;



import React from "react";
import { useParams } from "react-router-dom";
import goaExperiences from "../../assets/ExperienceData/exp.js";
import "./ExperienceDetails.css";

const ExperienceDetails = () => {
  const { id } = useParams();
  const experience = goaExperiences.find((exp) => exp.id === parseInt(id));

  if (!experience) {
    return <h2>Experience not found!</h2>;
  }

  return (
    <div className="experience-detail-container">
      <h1>{experience.name}</h1>
      <img src={experience.image} alt={experience.name} className="detail-image" />
      <p>{experience.description}</p>
      <div className="experience-info">
        <h3>Details</h3>
        <p><strong>Duration:</strong> {experience.details.duration}</p>
        <p><strong>Location:</strong> {experience.details.location}</p>
        <p><strong>Price:</strong> {experience.details.price}</p>
        <p><strong>Safety Measures:</strong> {experience.details.safety}</p>
        <h3>User Reviews</h3>
        <ul>
          {experience.details.reviews.map((review, index) => (
            <li key={index}>{review}</li>
          ))}
        </ul>
        <p><strong>Booking Contact:</strong> {experience.details.bookingContact}</p>
      </div>
    </div>
  );
};

export default ExperienceDetails;



