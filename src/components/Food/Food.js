import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Import specific module styles
import "./Food.css"; // Your custom styling file

// Sample data for food items, categorized
const foodItems = [
  // Veg Food
  {
    id: 1,
    name: "Vegetable Thali",
    category: "Veg Food",
    image: "veg_thali.jpg",
    place: "Swaad Ghar Restaurant",
    price: "₹200",
    details: {
      ingredients: "Rice, Roti, Dal, Vegetables, Salad",
      description: "A wholesome and nutritious traditional Indian meal.",
      reviews: ["Tasty and fulfilling.", "Perfect for vegetarians."],
    },
  },
  {
    id: 2,
    name: "Paneer Tikka",
    category: "Veg Food",
    image: "paneer_tikka.jpg",
    place: "Spice Cottage",
    price: "₹250",
    details: {
      ingredients: "Paneer, Spices, Yogurt",
      description: "Grilled paneer with a blend of spices, served with chutney.",
      reviews: ["Delicious and spicy!", "Great appetizer."],
    },
  },
  {
    id: 3,
    name: "Aloo Paratha",
    category: "Veg Food",
    image: "aloo_paratha.jpg",
    place: "Shree Roti",
    price: "₹180",
    details: {
      ingredients: "Wheat Flour, Potato, Spices",
      description: "A North Indian favorite served with curd and pickle.",
      reviews: ["Delicious and crispy.", "Perfect for breakfast."],
    },
  },
  {
    id: 4,
    name: "Vegetable Pulao",
    category: "Veg Food",
    image: "veg_pulao.jpg",
    place: "The Spice Room",
    price: "₹220",
    details: {
      ingredients: "Rice, Vegetables, Spices",
      description: "A colorful rice dish made with vegetables and aromatic spices.",
      reviews: ["Full of flavor.", "Perfect for lunch."],
    },
  },
  {
    id: 5,
    name: "Vegetable Samosa",
    category: "Veg Food",
    image: "veg_samosa.jpg",
    place: "Snack Corner",
    price: "₹50",
    details: {
      ingredients: "Potato, Peas, Spices",
      description: "Crispy pastry stuffed with spicy potato filling.",
      reviews: ["Crunchy and tasty.", "A great snack."],
    },
  },

  // Non-Veg Food
  {
    id: 6,
    name: "Chicken Biryani",
    category: "Non-Veg Food",
    image: "chicken_biryani.jpg",
    place: "Biryani King",
    price: "₹350",
    details: {
      ingredients: "Chicken, Basmati Rice, Spices",
      description: "Aromatic chicken biryani with a rich blend of spices.",
      reviews: ["Full of flavors.", "Best biryani in town."],
    },
  },
  {
    id: 7,
    name: "Grilled Fish",
    category: "Non-Veg Food",
    image: "grilled_fish.jpg",
    place: "Seafood Haven",
    price: "₹400",
    details: {
      ingredients: "Fish, Herbs, Spices",
      description: "Grilled fish with a crispy outer layer and tender inside.",
      reviews: ["Fresh and tasty!", "A must-try for seafood lovers."],
    },
  },
  {
    id: 8,
    name: "Mutton Korma",
    category: "Non-Veg Food",
    image: "mutton_korma.jpg",
    place: "Royal Korma",
    price: "₹450",
    details: {
      ingredients: "Mutton, Yogurt, Spices",
      description: "A rich, creamy mutton curry with aromatic spices.",
      reviews: ["Delicious and creamy.", "Great for mutton lovers."],
    },
  },
  {
    id: 9,
    name: "Chicken Tandoori",
    category: "Non-Veg Food",
    image: "chicken_tandoori.jpg",
    place: "Tandoor Express",
    price: "₹350",
    details: {
      ingredients: "Chicken, Spices, Yogurt",
      description: "Grilled chicken marinated in a rich blend of spices.",
      reviews: ["A perfect smoky flavor.", "The chicken is tender and juicy."],
    },
  },
  {
    id: 10,
    name: "Prawn Curry",
    category: "Non-Veg Food",
    image: "prawn_curry.jpg",
    place: "Coastal Cuisines",
    price: "₹400",
    details: {
      ingredients: "Prawns, Coconut Milk, Spices",
      description: "A flavorful prawn curry with coconut milk and spices.",
      reviews: ["Fresh and flavorful.", "One of the best prawn dishes."],
    },
  },

  // Goa Seafood
  {
    id: 11,
    name: "Goan Fish Curry",
    category: "Goa Seafood",
    image: "goan_fish_curry.jpg",
    place: "Fish Market",
    price: "₹450",
    details: {
      ingredients: "Fish, Coconut Milk, Spices",
      description: "A traditional Goan curry made with fresh fish and coconut milk.",
      reviews: ["Authentic Goan taste.", "Best seafood in Goa."],
    },
  },
  {
    id: 12,
    name: "Prawn Balchao",
    category: "Goa Seafood",
    image: "prawn_balchao.jpg",
    place: "Goa Seafood Grill",
    price: "₹500",
    details: {
      ingredients: "Prawns, Red Chilli, Garlic, Vinegar",
      description: "Spicy prawn dish marinated with vinegar and spices.",
      reviews: ["Tasty and spicy!", "Great seafood dish."],
    },
  },
  {
    id: 13,
    name: "Goan Fish Fry",
    category: "Goa Seafood",
    image: "goan_fish_fry.jpg",
    place: "Fisherman's Wharf",
    price: "₹380",
    details: {
      ingredients: "Fish, Spices, Oil",
      description: "Goan-style fried fish with a crispy exterior and juicy inside.",
      reviews: ["Deliciously fried.", "A must-try for fish lovers."],
    },
  },
  {
    id: 14,
    name: "Clams Masala",
    category: "Goa Seafood",
    image: "clams_masala.jpg",
    place: "The Seafood Shack",
    price: "₹400",
    details: {
      ingredients: "Clams, Spices, Coconut",
      description: "Goan-style clams cooked in spicy coconut gravy.",
      reviews: ["Spicy and flavorful.", "Loved the taste of the clams."],
    },
  },
  {
    id: 15,
    name: "Kingfish Curry",
    category: "Goa Seafood",
    image: "kingfish_curry.jpg",
    place: "Goan Delights",
    price: "₹550",
    details: {
      ingredients: "Kingfish, Coconut Milk, Spices",
      description: "A flavorful curry made with tender kingfish and coconut milk.",
      reviews: ["Rich and delicious.", "Great for seafood lovers."],
    },
  },
];

const Food = () => {
  const [selectedFood, setSelectedFood] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Veg Food");

  const categories = ["Veg Food", "Non-Veg Food", "Goa Seafood"];

  const handleCardClick = (food) => {
    setSelectedFood(food);
  };

  const filteredFoodItems = foodItems.filter(
    (food) => food.category === selectedCategory
  );

  return (
    <div className="container">
      <h1 className="food-header">Food Options</h1>

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
        className="food-swiper"
      >
        {filteredFoodItems.map((food) => (
          <SwiperSlide key={food.id}>
            <div className="food-card" onClick={() => handleCardClick(food)}>
              <img
                src={food.image}
                alt={food.name}
                className="food-card-image"
              />
              <div className="food-card-body">
                <h5>{food.name}</h5>
                <p>{food.place}</p>
                <p>{food.price}</p>
                <button className="know-more-btn">Know More</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* If a food item is selected, show detailed information */}
      {selectedFood && (
        <div className="food-detail">
          <h2>{selectedFood.name}</h2>
          <img
            src={selectedFood.image}
            alt={selectedFood.name}
            className="food-detail-image"
          />
          <div className="food-info">
            <h3>Details</h3>
            <p><strong>Ingredients:</strong> {selectedFood.details.ingredients}</p>
            <p><strong>Description:</strong> {selectedFood.details.description}</p>
            <h3>User Reviews</h3>
            <ul>
              {selectedFood.details.reviews.map((review, index) => (
                <li key={index}>{review}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Food;
