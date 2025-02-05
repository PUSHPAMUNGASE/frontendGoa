// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css"; // Import Swiper styles
// import "swiper/css/pagination"; // Import specific module styles
// import "./ExperienceCardSlider.css"; // Your custom styling file

// import goaExperiences from "../../assets/ExperienceData/exp.js";



// const ExperienceCardSlider = () => {
// const navigate=useNavigate();
//    const [selectedExperience, setSelectedExperience] = useState(null);
//   const [selectedCategory, setSelectedCategory] = useState("Adventure");

//   const click =(route)=>{
//     navigate(route);
//   }

//   const categories = [
//     "Adventure",
//     "Relaxation",
//     "Cultural & Heritage",
//     "Nature & Wildlife",
//     "Family & Kids",
//     "Nightlife & Entertainment",
//     "Romantic",
//   ];

//   const handleCardClick = (experience) => {
//     setSelectedExperience(experience);
//   };

//   const filteredExperiences = goaExperiences.filter(
//     (experience) => experience.category === selectedCategory
//   );

//   return (
//     <div className="container1">
//         <h1 className="exh1">Experiences</h1>
//       {/* Category Tabs */}
//       <div className="category-tabs">
//         {categories.map((category) => (
//           <button
//             key={category}
//             onClick={() => setSelectedCategory(category)}
//             className={selectedCategory === category ? "active" : ""}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Cards Slider */}
//       <Swiper
//         slidesPerView={3}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//         }}
//         modules={[Pagination]}
//         className="mySwiper"
//       >
//         {filteredExperiences.map((experience) => (
//           <SwiperSlide key={experience.id}>
//             <div className="card" onClick={() => handleCardClick(experience)}>
//               <img
//                 src={experience.image}
//                 alt={experience.name}
//                 className="card-image"
//               />
//               <div className="card-body">
//                 <h5>{experience.name}</h5>
//                 <p>{experience.description}</p>
//                 <div className="rating">Rating: {experience.rating}</div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>


//       {selectedExperience && (
//   <div className="experience-detail">
//     <h2>{click.selectedExperience.name}</h2>
//     <p>{click.selectedExperience.description}</p>
//     <img
//       src={click.selectedExperience.image}
//       alt={click.selectedExperience.name}
//       className="detail-image"
//     />
//     <div className="experience-info">
//       <h3>Details</h3>
//       <p><strong>Duration:</strong> {click.selectedExperience.details.duration}</p>
//       <p><strong>Location:</strong> {click.selectedExperience.details.location}</p>
//       <p><strong>Price:</strong> {click.selectedExperience.details.price}</p>
//       <p><strong>Safety Measures:</strong> {click.selectedExperience.details.safety}</p>
//       <h3>User Reviews</h3>
//       <ul>
//         {selectedExperience.details.reviews.map((review, index) => (
//           <li key={index}>{review}</li>
//         ))}
//       </ul>
//       <p><strong>Booking Contact:</strong> {selectedExperience.details.bookingContact}</p>
//     </div>
//   </div>
// )}




    
//     </div>
//   );
// };

// export default ExperienceCardSlider;  

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/pagination"; 
import "./ExperienceCardSlider.css"; 

import goaExperiences from "../../assets/ExperienceData/exp.js";

const ExperienceCardSlider = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Adventure");

  const categories = [
    "Adventure",
    "Relaxation",
    "Cultural & Heritage",
    "Nature & Wildlife",
    "Family & Kids",
    "Nightlife & Entertainment",
    "Romantic",
  ];

  const filteredExperiences = goaExperiences.filter(
    (experience) => experience.category === selectedCategory
  );

  return (
    <div className="container1">
      <h1 className="exh1">Experiences</h1>

      {/* Category Tabs */}
      <div className="category-tabs">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Slider */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {filteredExperiences.map((experience) => (
          <SwiperSlide key={experience.id}>
            <div 
              className="card" 
              onClick={() => navigate(`/exp/${experience.id}`)}
            >
              <img src={experience.image} alt={experience.name} className="card-image" />
              <div className="card-body">
                <h5>{experience.name}</h5>
                <p>{experience.description}</p>
                <div className="rating">Rating: {experience.rating}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ExperienceCardSlider;


