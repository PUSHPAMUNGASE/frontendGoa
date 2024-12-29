


import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import specific module styles
import "./ExperienceCardSlider.css"; // Your custom styling file

// Sample data for Goa experiences, categorized
const goaExperiences = [
  // Adventure
  {
    id: 1,
    name: "Sunset Cruise",
    category: "Adventure",
    description: "A beautiful sunset cruise along the Goan coastline.",
    image: "sunset_cruise.jpg",
    rating: 4.5,
    details: {
      duration: "2 hours",
      location: "Goan coastline",
      price: "₹1500 per person",
      safety: "Life jackets provided, experienced crew",
      reviews: ["Great experience!", "Highly recommend."],
      bookingContact: "contact@sunsetcruisegoa.com",
    },
  },
  {
    id: 2,
    name: "Scuba Diving",
    category: "Adventure",
    description: "Explore the underwater world with an exciting scuba diving experience.",
    image: "scuba_diving.jpg",
    rating: 4.7,
    details: {
      duration: "3 hours",
      location: "Palolem Beach",
      price: "₹3500 per person",
      safety: "Certified instructors, diving gear provided",
      reviews: ["Amazing underwater experience.", "Professional and safe."],
      bookingContact: "scubadive@goa.com",
    },
  },
  {
    id: 3,
    name: "Parasailing",
    category: "Adventure",
    description: "Feel the rush of adrenaline as you soar high above the ocean.",
    image: "parasailing.jpg",
    rating: 4.6,
    details: {
      duration: "30 minutes",
      location: "Baga Beach",
      price: "₹2000 per person",
      safety: "Safety harness, trained instructor",
      reviews: ["Thrilling experience!", "Must try for adventure lovers."],
      bookingContact: "parasailing@goa.com",
    },
  },

  // Relaxation
  {
    id: 4,
    name: "Spa Treatment",
    category: "Relaxation",
    description: "Unwind with a soothing spa treatment by the beach.",
    image: "spa_treatment.jpg",
    rating: 4.8,
    details: {
      duration: "1.5 hours",
      location: "Calangute Beach",
      price: "₹2500 per person",
      safety: "Trained therapists, premium products",
      reviews: ["Perfect relaxation experience.", "Soothing and peaceful."],
      bookingContact: "spa@goa.com",
    },
  },
  {
    id: 5,
    name: "Yoga Retreat",
    category: "Relaxation",
    description: "Rejuvenate your mind and body with a calming yoga session.",
    image: "yoga_retreat.jpg",
    rating: 4.7,
    details: {
      duration: "2 hours",
      location: "Ashwem Beach",
      price: "₹1800 per session",
      safety: "Experienced yoga instructor",
      reviews: ["Incredible experience.", "Highly recommend for stress relief."],
      bookingContact: "yoga@goa.com",
    },
  },
  {
    id: 6,
    name: "Beach Meditation",
    category: "Relaxation",
    description: "Meditate by the serene Goa beaches to achieve tranquility.",
    image: "beach_meditation.jpg",
    rating: 4.6,
    details: {
      duration: "1 hour",
      location: "Palolem Beach",
      price: "₹1200 per session",
      safety: "Guided meditation with experienced practitioners",
      reviews: ["A peaceful experience.", "Perfect for mindfulness."],
      bookingContact: "meditation@goa.com",
    },
  },

  // Cultural & Heritage
  {
    id: 7,
    name: "Goan Heritage Walk",
    category: "Cultural & Heritage",
    description: "A walking tour through the historical streets of Old Goa.",
    image: "heritage_walk.jpg",
    rating: 4.4,
    details: {
      duration: "3 hours",
      location: "Old Goa",
      price: "₹1500 per person",
      safety: "Comfortable walking shoes recommended",
      reviews: ["Great insight into Goan history.", "Cultural must-do."],
      bookingContact: "heritage@goa.com",
    },
  },
  {
    id: 8,
    name: "Folk Dance Show",
    category: "Cultural & Heritage",
    description: "Enjoy a vibrant folk dance performance celebrating Goan culture.",
    image: "folk_dance.jpg",
    rating: 4.6,
    details: {
      duration: "1.5 hours",
      location: "Goan Cultural Center",
      price: "₹1200 per ticket",
      safety: "Seated performance, no risks",
      reviews: ["Fantastic cultural experience.", "Colorful and energetic."],
      bookingContact: "dance@goa.com",
    },
  },
  {
    id: 9,
    name: "Portuguese Architecture Tour",
    category: "Cultural & Heritage",
    description: "Explore the colonial-era Portuguese architecture in Goa.",
    image: "portuguese_architecture.jpg",
    rating: 4.7,
    details: {
      duration: "2 hours",
      location: "Fontainhas",
      price: "₹1800 per person",
      safety: "Guided tour with experienced guide",
      reviews: ["A journey through time.", "Rich cultural experience."],
      bookingContact: "architecture@goa.com",
    },
  },

  // Nature & Wildlife
  {
    id: 10,
    name: "Wildlife Safari",
    category: "Nature & Wildlife",
    description: "Experience the natural beauty of Goa’s wildlife reserves.",
    image: "wildlife_safari.jpg",
    rating: 4.8,
    details: {
      duration: "4 hours",
      location: "Bhagwan Mahavir Wildlife Sanctuary",
      price: "₹3500 per person",
      safety: "Wildlife experts, safe vehicles",
      reviews: ["Amazing wildlife experience.", "Saw tigers and elephants."],
      bookingContact: "safari@goa.com",
    },
  },
  {
    id: 11,
    name: "Bird Watching Tour",
    category: "Nature & Wildlife",
    description: "Observe exotic birds in the lush forests of Goa.",
    image: "bird_watching.jpg",
    rating: 4.7,
    details: {
      duration: "3 hours",
      location: "Salim Ali Bird Sanctuary",
      price: "₹2200 per person",
      safety: "Binoculars provided, experienced guide",
      reviews: ["Incredible bird sightings.", "Peaceful and informative."],
      bookingContact: "birdwatching@goa.com",
    },
  },
  {
    id: 12,
    name: "River Kayaking",
    category: "Nature & Wildlife",
    description: "Paddle through serene rivers surrounded by lush greenery.",
    image: "kayaking.jpg",
    rating: 4.6,
    details: {
      duration: "2 hours",
      location: "Mandovi River",
      price: "₹1500 per person",
      safety: "Life jackets provided",
      reviews: ["Very relaxing and scenic.", "Great way to enjoy nature."],
      bookingContact: "kayaking@goa.com",
    },
  },

  // Family & Kids
  {
    id: 13,
    name: "Water Park Fun",
    category: "Family & Kids",
    description: "A fun day at Goa’s famous water parks with slides and pools.",
    image: "water_park.jpg",
    rating: 4.7,
    details: {
      duration: "4 hours",
      location: "Water Kingdom",
      price: "₹1500 per person",
      safety: "Lifeguards, safe and family-friendly environment",
      reviews: ["Great fun for the whole family!", "Perfect for kids."],
      bookingContact: "waterpark@goa.com",
    },
  },
  {
    id: 14,
    name: "Dolphin Watching",
    category: "Family & Kids",
    description: "A boat ride to see dolphins in the beautiful Goan waters.",
    image: "dolphin_watching.jpg",
    rating: 4.6,
    details: {
      duration: "2 hours",
      location: "Candolim Beach",
      price: "₹1800 per person",
      safety: "Certified guides, life jackets",
      reviews: ["Fantastic family outing.", "Amazing experience."],
      bookingContact: "dolphinwatch@goa.com",
    },
  },
  {
    id: 15,
    name: "Go-Karting",
    category: "Family & Kids",
    description: "Race your family and friends in a fun go-karting experience.",
    image: "go_karting.jpg",
    rating: 4.5,
    details: {
      duration: "30 minutes",
      location: "Nuvem Raceway",
      price: "₹800 per person",
      safety: "Helmet and safety gear provided",
      reviews: ["Exciting activity for all ages!", "Great fun for the whole family."],
      bookingContact: "karting@goa.com",
    },
  },

  // Nightlife & Entertainment
  {
    id: 16,
    name: "Night Beach Party",
    category: "Nightlife & Entertainment",
    description: "Dance under the stars at Goa's most famous beach parties.",
    image: "beach_party.jpg",
    rating: 4.8,
    details: {
      duration: "4 hours",
      location: "Anjuna Beach",
      price: "₹2500 per person",
      safety: "Trained security, open bar",
      reviews: ["Amazing music and vibe!", "Best night party."],
      bookingContact: "beachparty@goa.com",
    },
  },
  {
    id: 17,
    name: "DJ Night at Club",
    category: "Nightlife & Entertainment",
    description: "Enjoy the best DJ performances at Goa's top nightclubs.",
    image: "dj_night.jpg",
    rating: 4.7,
    details: {
      duration: "5 hours",
      location: "Tito's Club",
      price: "₹3000 per person",
      safety: "Trained staff, secure environment",
      reviews: ["Great music and crowd.", "Had a blast dancing!"],
      bookingContact: "djnight@goa.com",
    },
  },
  {
    id: 18,
    name: "Casino Night",
    category: "Nightlife & Entertainment",
    description: "Test your luck at Goa's premier casino.",
    image: "casino_night.jpg",
    rating: 4.6,
    details: {
      duration: "3 hours",
      location: "Goa Casino",
      price: "₹5000 per entry",
      safety: "Age verification, secure environment",
      reviews: ["Exciting experience.", "Great atmosphere."],
      bookingContact: "casino@goa.com",
    },
  },

  // Romantic
  {
    id: 19,
    name: "Private Dinner on the Beach",
    category: "Romantic",
    description: "Enjoy a private candle-lit dinner on a secluded beach.",
    image: "private_dinner.jpg",
    rating: 4.9,
    details: {
      duration: "2 hours",
      location: "Baga Beach",
      price: "₹5000 per couple",
      safety: "Private setup, trained staff",
      reviews: ["Perfect romantic experience.", "A night to remember."],
      bookingContact: "beachdinner@goa.com",
    },
  },
  {
    id: 20,
    name: "Sunset Boat Ride",
    category: "Romantic",
    description: "Enjoy a peaceful sunset boat ride along the Goan coastline.",
    image: "sunset_boat.jpg",
    rating: 4.8,
    details: {
      duration: "1.5 hours",
      location: "Mandovi River",
      price: "₹3000 per couple",
      safety: "Safety gear provided, experienced crew",
      reviews: ["A beautiful and peaceful experience.", "Magical sunset."],
      bookingContact: "boatride@goa.com",
    },
  },
  {
    id: 21,
    name: "Couple's Spa Day",
    category: "Romantic",
    description: "Relax with your partner during a luxurious couple's spa treatment.",
    image: "couples_spa.jpg",
    rating: 4.7,
    details: {
      duration: "2 hours",
      location: "Calangute Beach",
      price: "₹6000 per couple",
      safety: "Trained therapists, premium products",
      reviews: ["Absolutely relaxing.", "Perfect way to unwind together."],
      bookingContact: "couplesspa@goa.com",
    },
  },
];

const ExperienceCardSlider = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
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

  const handleCardClick = (experience) => {
    setSelectedExperience(experience);
  };

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
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {filteredExperiences.map((experience) => (
          <SwiperSlide key={experience.id}>
            <div className="card" onClick={() => handleCardClick(experience)}>
              <img
                src={experience.image}
                alt={experience.name}
                className="card-image"
              />
              <div className="card-body">
                <h5>{experience.name}</h5>
                <p>{experience.description}</p>
                <div className="rating">Rating: {experience.rating}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* If an experience is selected, show detailed information */}
      {selectedExperience && (
        <div className="experience-detail">
          <h2>{selectedExperience.name}</h2>
          <p>{selectedExperience.description}</p>
          <img
            src={selectedExperience.image}
            alt={selectedExperience.name}
            className="detail-image"
          />
          <div className="experience-info">
            <h3>Details</h3>
            <p><strong>Duration:</strong> {selectedExperience.details.duration}</p>
            <p><strong>Location:</strong> {selectedExperience.details.location}</p>
            <p><strong>Price:</strong> {selectedExperience.details.price}</p>
            <p><strong>Safety Measures:</strong> {selectedExperience.details.safety}</p>
            <h3>User Reviews</h3>
            <ul>
              {selectedExperience.details.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
            <p><strong>Booking Contact:</strong> {selectedExperience.details.bookingContact}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceCardSlider;  

