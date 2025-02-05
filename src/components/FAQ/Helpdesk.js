
// import React, { useState } from "react";
// import "./helpdesk.css";
// import image from "../../assets/FAQ.jpg"; // Static image for the right grid

// const contentData = {
//   "Travel Planning": {
//     paragraph:
//       "Goa is a tropical paradise that offers the perfect blend of culture, relaxation, and adventure. From serene beaches to vibrant nightlife, planning a trip to Goa ensures a memorable experience. Make sure to finalize your itinerary, book accommodations in advance, and plan visits to top attractions like Old Goa churches, spice plantations, and flea markets.",
//     faqs: [
//       {
//         question: "What are the best months to visit Goa?",
//         answer:
//           "The best time to visit Goa is from November to February when the weather is pleasant and ideal for beach activities and sightseeing.",
//       },
//       {
//         question: "Do I need a permit to visit any areas in Goa?",
//         answer:
//           "No special permit is required to visit Goa. However, if you're planning to visit certain wildlife sanctuaries, entry permits might be required.",
//       },
//     ],
//   },
//   Transportation: {
//     paragraph:
//       "Getting around Goa is a breeze with options ranging from rented scooters to taxis, local buses, and private cars. Goa also has a well-connected network of ferries that can be a fun way to travel. For intercity transport, trains and flights are readily available to and from Goa.",
//     faqs: [
//       {
//         question: "Can I rent a bike in Goa, and what are the requirements?",
//         answer:
//           "Yes, renting a bike is easy in Goa. You'll need a valid driver's license and ID proof. Rentals usually cost between ₹300 to ₹500 per day.",
//       },
//       {
//         question: "Are there public transport options available?",
//         answer:
//           "Yes, Goa has public buses and shared taxis, though they can be infrequent. Renting a vehicle is a more convenient option for exploring the region.",
//       },
//     ],
//   },
//   Accommodations: {
//     paragraph:
//       "Goa offers a wide range of accommodations to suit every budget, from luxury beach resorts to budget-friendly guesthouses and hostels. Homestays and boutique hotels are also popular choices.",
//     faqs: [
//       {
//         question: "What are the best areas to stay in Goa?",
//         answer:
//           "For nightlife, stay in North Goa (Baga, Calangute). For quieter beaches, choose South Goa (Palolem, Agonda).",
//       },
//       {
//         question: "Are there options for budget travelers?",
//         answer:
//           "Yes, Goa has plenty of affordable hostels, guesthouses, and budget hotels starting at ₹500 per night.",
//       },
//     ],
//   },
//   Cuisine: {
//     paragraph:
//       "Goa is a foodie paradise offering a mix of traditional Goan, Indian, and international cuisine. Don't miss out on trying Goan seafood, vindaloo, and bebinca for dessert.",
//     faqs: [
//       {
//         question: "What are must-try Goan dishes?",
//         answer:
//           "Must-try dishes include Goan fish curry, pork vindaloo, prawn balchao, and bebinca for dessert.",
//       },
//       {
//         question: "Are there vegetarian options available?",
//         answer:
//           "Yes, many restaurants in Goa offer vegetarian and vegan options, including traditional Goan vegetarian dishes.",
//       },
//     ],
//   },
// };

// const Helpdesk = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Travel Planning");
//   const [openFaqIndex, setOpenFaqIndex] = useState(null); // Track the open FAQ index

//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//     setOpenFaqIndex(null); // Reset FAQ when category changes
//   };

//   const toggleFaq = (index) => {
//     setOpenFaqIndex(openFaqIndex === index ? null : index);
//   };

//   return (
//     <div className="dynamic-faq-container">
//       <div className="faq-grid">
//         {/* Sidebar Grid */}
//         <div className="faq-sidebar">
//           <ul>
//             {Object.keys(contentData).map((category) => (
//               <li
//                 key={category}
//                 className={selectedCategory === category ? "active" : ""}
//                 onClick={() => handleCategoryClick(category)}
//               >
//                 {category}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Content Grid */}
//         <div className="faq-content">
//           <h1>{selectedCategory}</h1>
//           <p>{contentData[selectedCategory].paragraph}</p>
//         </div>

//         {/* Static Image Grid */}
//         <div className="faq-image">
//           <img src={image} alt="Static Illustration" />
//         </div>
//       </div>

//       {/* FAQs Section */}
//       <div className="faq-bottom">
//         <h2>Frequently Asked Questions</h2>
//         <div className="faq-list">
//           {contentData[selectedCategory].faqs.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <div
//                 className="faq-question"
//                 onClick={() => toggleFaq(index)}
//               >
//                 <span>{faq.question}</span>
//                 <span className="plus-icon" style={{ marginLeft: "auto" }}>
//                   {openFaqIndex === index ? "-" : "+"}
//                 </span>
//               </div>
//               {openFaqIndex === index && (
//                 <div className="faq-answer">
//                   <span>{faq.answer}</span>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Helpdesk;

import React, { useState } from "react";
import "./helpdesk.css";
import image from "../../assets/FAQ/FAQ.jpg"; // Static image for the right grid

const contentData = {
  "Travel Planning": {
    paragraph:
      "Goa is a tropical paradise that offers the perfect blend of culture, relaxation, and adventure. From serene beaches to vibrant nightlife, planning a trip to Goa ensures a memorable experience. Make sure to finalize your itinerary, book accommodations in advance, and plan visits to top attractions like Old Goa churches, spice plantations, and flea markets.",
    faqs: [
      {
        question: "What are the best months to visit Goa?",
        answer:
          "The best time to visit Goa is from November to February when the weather is pleasant and ideal for beach activities and sightseeing.",
      },
      {
        question: "Do I need a permit to visit any areas in Goa?",
        answer:
          "No special permit is required to visit Goa. However, if you're planning to visit certain wildlife sanctuaries, entry permits might be required.",
      },
      {
        question: "What are the top attractions to visit in Goa?",
        answer:
          "Some of the top attractions in Goa include the churches of Old Goa, Dudhsagar Waterfalls, spice plantations, and the Anjuna Flea Market.",
      },
      {
        question: "What activities can I do in Goa?",
        answer:
          "In Goa, you can enjoy activities like water sports, trekking, visiting historical sites, and exploring the vibrant nightlife.",
      },
      {
        question: "Is Goa safe for solo travelers?",
        answer:
          "Yes, Goa is generally safe for solo travelers. However, it's always important to stay aware of your surroundings and take basic precautions, especially at night.",
      },
    ],
  },
  Transportation: {
    paragraph:
      "Getting around Goa is a breeze with options ranging from rented scooters to taxis, local buses, and private cars. Goa also has a well-connected network of ferries that can be a fun way to travel. For intercity transport, trains and flights are readily available to and from Goa.",
    faqs: [
      {
        question: "Can I rent a bike in Goa, and what are the requirements?",
        answer:
          "Yes, renting a bike is easy in Goa. You'll need a valid driver's license and ID proof. Rentals usually cost between ₹300 to ₹500 per day.",
      },
      {
        question: "Are there public transport options available?",
        answer:
          "Yes, Goa has public buses and shared taxis, though they can be infrequent. Renting a vehicle is a more convenient option for exploring the region.",
      },
      {
        question: "What is the best way to travel between cities in Goa?",
        answer:
          "The best way to travel between cities in Goa is by hiring a taxi, renting a car, or using the local bus services. For long-distance travel, you can also take a train or flight.",
      },
      {
        question: "Are there any local transport apps available?",
        answer:
          "Yes, apps like Ola and Uber are available for easy and safe transportation within Goa. Additionally, some rental agencies offer bike rentals via apps.",
      },
      {
        question: "Is it easy to find parking in Goa?",
        answer:
          "Finding parking in Goa can be a bit tricky, especially in touristy areas. It's advisable to park in designated parking zones or at hotels that offer parking services.",
      },
    ],
  },
  Accommodations: {
    paragraph:
      "Goa offers a wide range of accommodations to suit every budget, from luxury beach resorts to budget-friendly guesthouses and hostels. Homestays and boutique hotels are also popular choices.",
    faqs: [
      {
        question: "What are the best areas to stay in Goa?",
        answer:
          "For nightlife, stay in North Goa (Baga, Calangute). For quieter beaches, choose South Goa (Palolem, Agonda).",
      },
      {
        question: "Are there options for budget travelers?",
        answer:
          "Yes, Goa has plenty of affordable hostels, guesthouses, and budget hotels starting at ₹500 per night.",
      },
      {
        question: "How can I book accommodation in Goa?",
        answer:
          "You can book accommodations online via platforms like Booking.com, Airbnb, or directly through hotel websites. It's best to book in advance, especially during peak seasons.",
      },
      {
        question: "Are there luxury resorts in Goa?",
        answer:
          "Yes, Goa is home to several luxury beach resorts, including those in North Goa (like Anjuna) and South Goa (like Palolem). These resorts offer world-class amenities and services.",
      },
      {
        question: "What types of accommodations are pet-friendly?",
        answer:
          "Some hotels, resorts, and homestays in Goa are pet-friendly. It's advisable to confirm with the property before booking.",
      },
    ],
  },
  Cuisine: {
    paragraph:
      "Goa is a foodie paradise offering a mix of traditional Goan, Indian, and international cuisine. Don't miss out on trying Goan seafood, vindaloo, and bebinca for dessert.",
    faqs: [
      {
        question: "What are must-try Goan dishes?",
        answer:
          "Must-try dishes include Goan fish curry, pork vindaloo, prawn balchao, and bebinca for dessert.",
      },
      {
        question: "Are there vegetarian options available?",
        answer:
          "Yes, many restaurants in Goa offer vegetarian and vegan options, including traditional Goan vegetarian dishes.",
      },
      {
        question: "Where can I find the best seafood in Goa?",
        answer:
          "You can find the best seafood in Goa at popular beachside shacks and restaurants such as Martin's Corner in Betalbatim and Fisherman's Wharf in Cavelossim.",
      },
      {
        question: "Is Goan cuisine spicy?",
        answer:
          "Yes, Goan cuisine is known for its spiciness, especially dishes like vindaloo and xacuti. If you prefer less spice, you can request milder versions.",
      },
      {
        question: "Can I find international cuisine in Goa?",
        answer:
          "Yes, Goa offers a wide variety of international cuisines including Italian, Chinese, and continental, especially in touristy areas like Baga and Anjuna.",
      },
    ],
  },
};

const Helpdesk = () => {
  const [selectedCategory, setSelectedCategory] = useState("Travel Planning");
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setOpenFaqIndex(null);
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="dynamic-faq-container">
      <div className="faq-grid">
        {/* Sidebar Grid */}
        <div className="faq-sidebar">
          <ul>
            {Object.keys(contentData).map((category) => (
              <li
                key={category}
                className={selectedCategory === category ? "active" : ""}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Grid */}
        <div className="faq-content">
          <h1>{selectedCategory}</h1>
          <p>{contentData[selectedCategory].paragraph}</p>
        </div>

        {/* Static Image Grid */}
        <div className="faq-image">
          <img src={image} alt="Static Illustration" />
        </div>
      </div>

      {/* FAQs Section */}
      <div className="faq-bottom">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {contentData[selectedCategory].faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="plus-icon" style={{ marginLeft: "auto" }}>
                  {openFaqIndex === index ? "-" : "+"}
                </span>
              </div>
              {openFaqIndex === index && (
                <div className="faq-answer">
                  <span>{faq.answer}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpdesk;
