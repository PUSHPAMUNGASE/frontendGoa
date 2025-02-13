
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"; // Correct import for Swiper modules
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import specific module styles
import "./Review.css"; // Your custom styling file

const DestinationCardSlider = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    fetch("http://localhost:8081/reviews/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        return response.json();
      })
      .then((data) => {
        setReviews(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container1">
      <h1 className="Review_h1">Reviews</h1> {/* Heading for reviews section */}

      {loading && <p>Loading reviews...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Swiper for Reviews */}
      {!loading && !error && (
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={index}>
              <div className="review-card">
                <h4>{rev.name}</h4>
                <p>Rating: {rev.rating} Stars</p>
                <p>{rev.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default DestinationCardSlider;

