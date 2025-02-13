
// import React, { useEffect, useState } from "react";
// import "./FoodSection.css";
// import axios from "axios";
// import temp from "../../assets/temp.jpg";

// const FoodFilter = () => {
//   const [hotels, setHotels] = useState([]);
//   const [images, setImages] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");

//   // Fetch food and image data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const foodResponse = await axios.get("http://localhost:8081/food/all");
//         //const imageResponse = await axios.get("http://localhost:8081/food-images/all");

//         setHotels(foodResponse.data);
//         //setImages(imageResponse.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Combine hotel and image data by matching hotel IDs
//   const combinedHotels = hotels.map((hotel) => {
//     const matchingImages = images.filter(
//       (image) => image?.hotel?.id === hotel?.hotel?.id
//     );

//     return {
//       ...hotel,
//       imageUrls:
//         matchingImages.length > 0
//           ? matchingImages.map((img) => img.imageUrl)
//           : [temp],
//     };
//   });

//   // Filter hotels based on category and search term
//   const filteredHotels = combinedHotels
//     .filter(
//       (hotel) =>
//         selectedCategory === "All" ||
//         hotel.category?.name === selectedCategory
//     )
//     .filter((hotel) =>
//       hotel.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       hotel.description?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-4">Food Filter</h2>

//       {/* Category Buttons */}
//       <div className="flex gap-4 mb-4">
//         {["All", "Veg", "Non-Veg", "Seafood", "Goa special"].map(
//           (category) => (
//             <button
//               key={category}
//               className={`px-4 py-2 border rounded-md ${
//                 selectedCategory === category
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           )
//         )}
//       </div>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search food or description..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full p-2 border rounded-md mb-4"
//       />

//       {/* Display Hotels with Available Foods */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredHotels.length > 0 ? (
//           filteredHotels.map((hotel) => (
//             <div
//               key={hotel.id}
//               className="border p-4 rounded-md shadow-md"
//             >
              

// {hotel.imageUrls.map((url, idx) => (
// <img
//   key={idx}
//   src={url}
//   alt={`Image ${idx + 1} for ${hotel.hotel?.name}`}
//   className="w-full h-48 object-cover rounded-md mb-2"
//   onError={(e) => {
//     if (!e.target.dataset.errorHandled) {
//       e.target.src = temp; // Replace with a local fallback image
//       e.target.dataset.errorHandled = true; // Prevents infinite looping
//     }
//   }}
// />
// ))}


//               <h3 className="text-xl font-bold">{hotel.hotel?.name}</h3>
//               <p className="text-gray-600">{hotel.hotel?.location}</p>
//               <p className="text-gray-600">Contact: {hotel.hotel?.contact}</p>

//               <h4 className="mt-2 font-semibold">Food Details:</h4>
//               <ul className="list-disc pl-5">
//                 <li><strong>Name:</strong> {hotel.name}</li>
//                 <li><strong>Price:</strong> {hotel.price}</li>
//                 <li><strong>Description:</strong> {hotel.description}</li>
//                 <li><strong>Category:</strong> {hotel.category?.name}</li>
                
//               </ul>
//             </div>
//           ))
//         ) : (
//           <p className="text-red-500">No food items found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodFilter;

//=========================================================================





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import temp from "../../assets/temp.jpg";
// import "./FoodSection.css";

// const FoodFilter = () => {
//   const [hotels, setHotels] = useState([]);
//   const [images, setImages] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch food and image data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const foodResponse = await axios.get("http://localhost:8081/food/all");
//         const imageResponse = await axios.get("http://localhost:8081/hotel-images/all");

//         setHotels(foodResponse.data);
//         setImages(imageResponse.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to fetch data");
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Combine food and image data based on hotel ID
//   const combinedHotels = hotels.map((hotel) => {
//     const matchingImages = images.filter((image) => image.id === hotel.hotel?.id);

//     return {
//       ...hotel,
//       imageUrls: matchingImages.length > 0 ? matchingImages.map((img) => img.imageUrl) : [temp],
//     };
//   });

//   // Filter hotels based on category and search term
//   const filteredHotels = combinedHotels
//     .filter((hotel) => selectedCategory === "All" || hotel.category?.name === selectedCategory)
//     .filter((hotel) =>
//       hotel.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       hotel.description?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   if (loading) return <p className="text-center text-gray-500">Loading food items...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-4">Food Filter</h2>

//       {/* Category Buttons */}
//       <div className="flex gap-4 mb-4">
//         {["All", "Veg", "Non-Veg", "Seafood", "Goa special"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 border rounded-md ${
//               selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search food or description..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full p-2 border rounded-md mb-4"
//       />

//       {/* Display Hotels with Available Foods */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredHotels.length > 0 ? (
//           filteredHotels.map((hotel) => (
//             <div key={hotel.id} className="border p-4 rounded-md shadow-md bg-white">
//               {/* Hotel Images */}
//               {hotel.imageUrls.map((url, idx) => (
//                 <img
//                   key={idx}
//                   src={url}
//                   alt={`Image ${idx + 1} for ${hotel.hotel?.name}`}
//                   className="w-full h-48 object-cover rounded-md mb-2"
//                   onError={(e) => {
//                     if (!e.target.dataset.errorHandled) {
//                       e.target.src = temp; // Fallback image
//                       e.target.dataset.errorHandled = true;
//                     }
//                   }}
//                 />
//               ))}

//               {/* Hotel & Food Details */}
//               <h3 className="text-xl font-bold">{hotel.hotel?.name}</h3>
//               <p className="text-gray-600">{hotel.hotel?.location}</p>
//               <p className="text-gray-600">Contact: {hotel.hotel?.contact}</p>

//               <h4 className="mt-2 font-semibold">Food Details:</h4>
//               <ul className="list-disc pl-5 text-gray-700">
//                 <li><strong>Name:</strong> {hotel.name}</li>
//                 <li><strong>Price:</strong> ₹{hotel.price}</li>
//                 <li><strong>Description:</strong> {hotel.description}</li>
//                 <li><strong>Category:</strong> {hotel.category?.name}</li>
//               </ul>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-red-500">No food items found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodFilter;






// //=================================================================

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import temp from "../../assets/temp.jpg";
// import "./FoodSection.css";

// const FoodFilter = () => {
//   const [hotels, setHotels] = useState([]);
//   const [images, setImages] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const foodResponse = await axios.get("http://localhost:8081/food/all");
//         const imageResponse = await axios.get("http://localhost:8081/hotel-images/all");

//         setHotels(foodResponse.data);
//         setImages(imageResponse.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to fetch data");
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const combinedHotels = hotels.map((hotel) => {
//     const matchingImages = images.filter((image) => image.id === hotel.hotel?.id);

//     return {
//       ...hotel,
//       imageUrls: matchingImages.length > 0 ? matchingImages.map((img) => img.imageUrl) : [temp],
//     };
//   });

//   const filteredHotels = combinedHotels
//     .filter((hotel) => selectedCategory === "All" || hotel.category?.name === selectedCategory)
//     .filter((hotel) =>
//       hotel.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       hotel.description?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   if (loading) return <p className="text-center text-gray-500 text-lg font-medium">Loading food items...</p>;
//   if (error) return <p className="text-center text-red-500 text-lg font-semibold">{error}</p>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Explore Delicious Food</h2>

//       {/* Category Buttons */}
//       <div className="flex flex-wrap justify-center gap-3 mb-6">
//         {["All", "Veg", "Non-Veg", "Seafood", "Goa special"].map((category) => (
//           <button
//             key={category}
//             className={`px-5 py-2 rounded-lg text-lg font-semibold transition-all duration-300
//               ${selectedCategory === category ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 hover:bg-blue-500 hover:text-white"}`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Search Input */}
//       <div className="flex justify-center mb-6">
//         <input
//           type="text"
//           placeholder="Search food or description..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full max-w-lg p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       {/* Display Hotels with Available Foods */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {filteredHotels.length > 0 ? (
//           filteredHotels.map((hotel) => (
//             <div key={hotel.id} className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
//               {/* Hotel Images */}
//               {hotel.imageUrls.map((url, idx) => (
//                 <img
//                   key={idx}
//                   src={url}
//                   alt={`Image ${idx + 1} for ${hotel.hotel?.name}`}
//                   className="w-full h-48 object-cover"
//                   onError={(e) => {
//                     if (!e.target.dataset.errorHandled) {
//                       e.target.src = temp;
//                       e.target.dataset.errorHandled = true;
//                     }
//                   }}
//                 />
//               ))}

//               <div className="p-5">
//                 {/* Hotel & Food Details */}
//                 <h3 className="text-xl font-bold text-gray-800">{hotel.hotel?.name}</h3>
//                 <p className="text-gray-600">{hotel.hotel?.location}</p>
//                 <p className="text-gray-600">📞 {hotel.hotel?.contact}</p>

//                 <h4 className="mt-3 font-semibold text-lg text-gray-700">🍽️ Food Details:</h4>
//                 <ul className="list-disc pl-5 text-gray-700 space-y-1">
//                   <li><strong>Name:</strong> {hotel.name}</li>
//                   <li><strong>Price:</strong> ₹{hotel.price}</li>
//                   <li><strong>Description:</strong> {hotel.description}</li>
//                   <li><strong>Category:</strong> {hotel.category?.name}</li>
//                 </ul>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-red-500 text-lg font-medium">No food items found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodFilter;




// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import temp from "../../assets/temp.jpg";
// i//mport "./FoodSection.css";

// const FoodSection = () => {
//   const [hotels, setHotels] = useState([]);
//   const [images, setImages] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch food and image data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const foodResponse = await axios.get("http://localhost:8081/food/all");
//         const imageResponse = await axios.get("http://localhost:8081/hotel-images/all");

//         setHotels(foodResponse.data);
//         setImages(imageResponse.data);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Failed to fetch data");
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   // Combine food and image data based on hotel ID
//   const combinedHotels = hotels.map((hotel) => {
//     const matchingImages = images.filter((image) => image.id === hotel.hotel?.id);

//     return {
//       ...hotel,
//       imageUrls: matchingImages.length > 0 ? matchingImages.map((img) => img.imageUrl) : [temp],
//     };
//   });

//   // Filter hotels based on category and search term
//   const filteredHotels = combinedHotels
//     .filter((hotel) => selectedCategory === "All" || hotel.category?.name === selectedCategory)
//     .filter((hotel) =>
//       hotel.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       hotel.description?.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//   if (loading) return <p className="text-center text-gray-500">Loading food items...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="p-5">
//       <h2 className="text-2xl font-bold mb-4">Food Filter</h2>

//       {/* Category Buttons */}
//       <div className="flex gap-4 mb-4">
//         {["All", "Veg", "Non-Veg", "Seafood", "Goa special"].map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 border rounded-md ${
//               selectedCategory === category ? "bg-blue-500 text-white" : "bg-gray-200"
//             }`}
//             onClick={() => setSelectedCategory(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search food or description..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         className="w-full p-2 border rounded-md mb-4"
//       />

//       {/* Display Hotels with Available Foods */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredHotels.length > 0 ? (
//           filteredHotels.map((hotel) => (
//             <div key={hotel.id} className="border p-4 rounded-md shadow-md bg-white">
//               {/* Hotel Images with uniform size */}
//               {hotel.imageUrls.map((url, idx) => (
//                 <img
//                   key={idx}
//                   src={url}
//                   alt={`Image ${idx + 1} for ${hotel.hotel?.name}`}
//                   className="w-full h-60 object-cover rounded-md mb-2"
//                   onError={(e) => {
//                     if (!e.target.dataset.errorHandled) {
//                       e.target.src = temp; // Fallback image
//                       e.target.dataset.errorHandled = true;
//                     }
//                   }}
//                 />
//               ))}

//               {/* Hotel & Food Details */}
//               <h3 className="text-xl font-bold">{hotel.hotel?.name}</h3>
//               <p className="text-gray-600">{hotel.hotel?.location}</p>
//               <p className="text-gray-600">Contact: {hotel.hotel?.contact}</p>

//               <h4 className="mt-2 font-semibold">Food Details:</h4>
//               <ul className="list-disc pl-5 text-gray-700">
//                 <li><strong>Name:</strong> {hotel.name}</li>
//                 <li><strong>Price:</strong> ₹{hotel.price}</li>
//                 <li><strong>Description:</strong> {hotel.description}</li>
//                 <li><strong>Category:</strong> {hotel.category?.name}</li>
//               </ul>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-red-500">No food items found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodSection;










import React, { useEffect, useState } from "react";
import axios from "axios";
import temp from "../../assets/temp.jpg";
import "./FoodSection.css";

const FoodSection= () => {
  const [hotels, setHotels] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch food and image data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const foodResponse = await axios.get("http://localhost:8081/food/all");
        const imageResponse = await axios.get("http://localhost:8081/hotel-images/all");

        setHotels(foodResponse.data);
        setImages(imageResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Combine food and image data based on hotel ID
  const combinedHotels = hotels.map((hotel) => {
    const matchingImages = images.filter((image) => image.id === hotel.hotel?.id);

    return {
      ...hotel,
      imageUrls: matchingImages.length > 0 ? matchingImages.map((img) => img.imageUrl) : [temp],
    };
  });

  // Filter hotels based on category and search term
  const filteredHotels = combinedHotels
    .filter((hotel) => selectedCategory === "All" || hotel.category?.name === selectedCategory)
    .filter((hotel) =>
      hotel.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.description?.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (loading) return <p className="text-center text-gray-500">Loading food items...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Food Filter</h2>

      {/* Category Buttons */}
      <div style={styles.buttonContainer}>
        {["All", "Veg", "Non-Veg", "Seafood", "Goa special"].map((category) => (
          <button
            key={category}
            style={{
              ...styles.button,
              backgroundColor: selectedCategory === category ? "#007bff" : "#e0e0e0",
              color: selectedCategory === category ? "#fff" : "#000",
            }}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search food or description..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchInput}
      />

      {/* Display Hotels with Available Foods */}
      <div style={styles.grid}>
        {filteredHotels.length > 0 ? (
          filteredHotels.map((hotel) => (
            <div key={hotel.id} style={styles.card}>
              {/* Hotel Image */}
              {hotel.imageUrls.slice(0, 1).map((url, idx) => (
                <img
                  key={idx}
                  src={url}
                  alt={`Image for ${hotel.hotel?.name}`}
                  style={styles.image}
                  onError={(e) => {
                    if (!e.target.dataset.errorHandled) {
                      e.target.src = temp; // Fallback image
                      e.target.dataset.errorHandled = true;
                    }
                  }}
                />
              ))}

              {/* Hotel & Food Details */}
              <h3 style={styles.hotelName}>{hotel.hotel?.name}</h3>
              <p style={styles.hotelInfo}>{hotel.hotel?.location}</p>
              <p style={styles.hotelInfo}>Contact: {hotel.hotel?.contact}</p>

              <h4 style={styles.foodHeading}>Food Details:</h4>
              <ul style={styles.foodList}>
                <li><strong>Name:</strong> {hotel.name}</li>
                <li><strong>Price:</strong> ₹{hotel.price}</li>
                <li><strong>Description:</strong> {hotel.description}</li>
                <li><strong>Category:</strong> {hotel.category?.name}</li>
              </ul>
            </div>
          ))
        ) : (
          <p style={styles.noItems}>No food items found.</p>
        )}
      </div>
    </div>
  );
};

// Inline CSS Styles
const styles = {
  container: { textAlign: "center", padding: "20px" },
  heading: { fontSize: "24px", fontWeight: "bold", marginBottom: "20px" },
  buttonContainer: { display: "flex", justifyContent: "center", gap: "10px", marginBottom: "20px" },
  button: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  },
  searchInput: {
    width: "60%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "15px",
    justifyContent: "center",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.2)",
    textAlign: "left",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "5px",
  },
  hotelName: { fontSize: "18px", fontWeight: "bold", marginTop: "10px" },
  hotelInfo: { color: "#555", fontSize: "14px" },
  foodHeading: { marginTop: "10px", fontWeight: "bold", fontSize: "16px" },
  foodList: { listStyleType: "disc", paddingLeft: "20px", color: "#444" },
  noItems: { color: "red", fontSize: "16px", fontWeight: "bold" },
};

export default FoodSection;

