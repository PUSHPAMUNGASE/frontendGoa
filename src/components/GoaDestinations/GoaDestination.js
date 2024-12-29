import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./GoaDestination.css";
import goaImage from "./GoaImage/goa1.jpg";
import goaImage1 from "./GoaImage/beach.jpg";
import goaImage2 from "./GoaImage/beach2.jpg";
import goaChurch from "./GoaImage/church.jpg"; // The image for detailed information
import goaMansion from "./GoaImage/Snapinsta.app_386309574_1260835767926282_4791269721590589320_n_1080.jpg";

export default function GoaDestination() {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore); // Toggle between showing more or less information
  };

  return (
    <div>
      <div
        id="carouselExampleFadedest"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Carousel Inner */}
        <div className="carousel-inner-dest">
          <div className="carousel-item-dest active">
            <img src={goaImage} className="d-block w-100" alt="Goa Beach 1" />
          </div>
          <div className="carousel-item-dest">
            <img src={goaImage1} className="d-block w-100" alt="Goa Beach 2" />
          </div>
          <div className="carousel-item-dest">
            <img src={goaImage2} className="d-block w-100" alt="Goa Beach 3" />
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          className="carousel-control-prev-dest"
          type="button"
          data-bs-target="#carouselExampleFadedest"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon-dest"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next-dest"
          type="button"
          data-bs-target="#carouselExampleFadedest"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon-dest"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Bottom Section */}
      <div className="bottom-container">
        {/* Left Side: Information */}
        <div className="info-section">
          <h1>
            Discover India's coastal jewel Goa: Where the sun, sand, and susegad
            collide
          </h1>
          <p>
            Ah, Goa! The very name conjures up images of sun-kissed beaches,
            swaying palm trees, and a laid-back vibe that is as contagious as a
            Goan smile.
          </p>
          <ul>
            <li>Hinterlands of Goa</li>
            <li>Portuguese heritage</li>
            <li>Beautiful beaches</li>
          </ul>
          {/* Read More Button */}
          <button className="read-more-btn" onClick={handleReadMore}>
            {showMore ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Right Side: Map */}
        <div className="map-section">
          <h2>Explore Goa</h2>
          <iframe
            title="Goa Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d491337.35715421034!2d73.6788026090822!3d15.34703819940456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfb7eb717c0c3f%3A0x6769fdf6d69a57c!2sGoa!5e0!3m2!1sen!2sin!4v1672300655645!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Conditional Display of More Information */}
      {showMore && (
        <div className="more-info-container">
          <div className="more-info-left">
            <h2>Sun-kissed beaches</h2>
            <p>
              Goa's coastline stretches across 106 kilometers, and it's no
              wonder that the beaches here are the stuff of dreams. From the
              bustling shores of Baga and Calangute to the serene sands of
              Palolem and Agonda, each beach has its unique flavor. Picture
              yourself sipping coconut water under the shade of a palm tree, the
              waves gently lapping at your toes. Bliss, right?
            </p>
            <h2>Vibrant festivals</h2>
            <p>
              Goa knows how to celebrate life! Whether it's the colorful
              Carnival, the spiritual Shigmo festival, or the pulsating Sunburn
              music festival, there's always something happening. The air is
              charged with excitement, and locals and tourists alike dance to
              the rhythm of the drums. It's a kaleidoscope of colors, music, and
              joy.
            </p>

            <h2>Mouth-watering cuisine</h2>
            <p>
              Prepare your taste buds for a flavor explosion! Goan cuisine is a
              delightful fusion of Indian, Portuguese, and Konkani influences.
              Seafood lovers rejoice—the fish curry rice, prawn balchão, and
              xacuti are legendary. Wash it down with some Feni (a local cashew
              spirit) or a chilled beer. And don't forget the bebinca for
              dessert—a layered cake that's pure indulgence.
            </p>

            <h2>Rich history</h2>
            <p>
              Goa wears its history proudly. The Portuguese left their mark
              here, evident in the charming churches, cathedrals, and old
              colonial buildings. Step into the Basilica of Bom Jesus, where the
              mortal remains of St. Francis Xavier rest. Explore the Fontainhas
              neighborhood with its narrow lanes and colorful houses—it's like
              stepping into a European postcard.
            </p>

            <h2>Susegad: The art of relaxation</h2>
            <p>
              Now, let's talk about Susegad. It's more than just a word; it's a
              state of mind. Imagine swinging lazily in a hammock, the sea
              breeze ruffling your hair, and time slowing down. That's Susegad.
              Goans have mastered the art of relaxation—they know how to take
              life easy, enjoy the moment, and let stress drift away like a
              paper boat on the Mandovi River.
            </p>
          </div>
          <div className="more-info-right">
            <img src={goaChurch} alt="Goa Beaches" />
          </div>
        </div>
      )}

      {/* Additional Details */}
      {showMore && (
        <div className="more-info-container">
          <div className="more-info-left">
            <h2>Capital: Panaji</h2>
            <p>
              Goa’s capital, Panaji, situated at the mouth of the Mandovi river,
              is reminiscent of a provincial Mediterranean town. It has a
              relaxed and friendly ambience, especially along the leafy avenues
              of the old town. Visit the Church of Our Lady of the Immaculate
              Conception and explore the colonial architecture.
            </p>

            <h2>Street-by-street: Panaji old town</h2>
            <p>
              Tucked away between Ourem Creek and Altinho Hill in Panaji, the
              old residential quarters of Fontainhas and São Tomé are filled
              with colorful houses and taverns offering Goan delicacies. A true
              taste of Goa's colonial heritage.
            </p>

            <h2>North Goa</h2>
            <p>
              From the forts of Reis Magos and Aguada to the beautiful beaches
              of Baga and Candolim, North Goa offers a mix of historical
              landmarks and lively beaches. Enjoy vibrant nightlife, water
              sports, and cultural exploration.
            </p>

            <h2>South Goa</h2>
            <p>
              South Goa is home to quieter beaches like Palolem and Colva, where
              you can unwind and explore Goa’s tranquil side. Discover
              Portuguese mansions, beautiful churches, and enjoy a laid-back
              atmosphere.
            </p>
          </div>
        </div>
      )}
      {/* Conditional Display of More Information */}
      {showMore && (
        <div className="more-info-container">
          <div className="row">
            <div className="more-info-left">
              <h2>Braganza House</h2>
              <p>
                Built in the 17th century, Braganza House is possibly the best
                example of what Goa's once grand and glorious mansions have
                today become. Located in Chandor, 15km east of Margao, the house
                was divided into two wings from the outset to house two sides of
                the same large family. It offers a glimpse into Goa's historical
                grandeur and the blending of Portuguese and Indian influences.
              </p>
            </div>
            <div className="more-info-right">
              <img
                src={goaMansion}
                alt="Braganza House"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      )}

      {/* More Sections for Goa Destinations */}
      {showMore && (
        <div className="more-info-container">
          <div className="more-info-left">
            <h2>Colva & Benaulim</h2>
            <p>
              Colva and Benaulim, with their broad, open beaches, offer a more
              relaxed, peaceful experience. While not as popular with
              backpackers, these areas have a quiet charm that makes them ideal
              for those wanting to explore the southern coast. The region is
              dotted with picturesque Portuguese-era mansions and whitewashed
              churches, perfect for cycling or scootering around.
            </p>

            <h2>Palolem & Around</h2>
            <p>
              Palolem is one of Goa's most stunning beaches, with a
              crescent-shaped bay surrounded by lush vegetation. Despite being
              popular, it retains its laid-back vibe. For a quieter experience,
              head further south to Patnem Beach or Colomb Bay, where you'll
              find peaceful stretches of sand and a slower pace of life.
            </p>

            <h2>An Amalgamation of Architecture and Aesthetics</h2>
            <p>
              Goa's colonial past is evident in its stunning architecture. The
              combination of Indian and European styles results in a unique
              visual experience. Must-visit locations include Fort Tiracol, the
              Bom Jesus Basilica, Se Cathedral, and Chapora Fort, where you can
              recreate iconic scenes from the film 'Dil Chahta Hai'.
            </p>

            <h2>Beyond the Beaches and Nightlife</h2>
            <p>
              While Goa is known for its beaches and vibrant nightlife, it also
              offers a wealth of cultural and spiritual experiences. Visit
              historic churches like the Church of St. Francis of Assissi and
              the Church of St. Cajetan, and explore magnificent temples like
              Shri Manguesh Temple and Shanta Durga Temple.
            </p>

            <h2>A Gastronomic Extravaganza</h2>
            <p>
              Goan cuisine is a fusion of spices, seafood, and sweets. Don't
              miss iconic dishes like Vindaloo, Prawn Balchão, and Bebinca, a
              traditional layered cake that captures the essence of Goa's sweet
              flavors.
            </p>

            <h2>Embrace the Thrill of Wildlife and Nature</h2>
            <p>
              Explore Goa's wildlife through its many sanctuaries and forests,
              including Bhagwan Mahavir and Mhadei Wildlife Sanctuaries. For
              birdwatching enthusiasts, the Dr Salim Ali Bird Sanctuary is a
              must-visit. In addition to its lush greenery, Goa's coastline
              offers opportunities for water sports like scuba diving and
              snorkeling, providing unforgettable experiences.
            </p>
          </div>
        </div>
      )}

      {/* Additional Details */}
      {showMore && (
        <div className="more-info-container">
          <div className="more-info-left">
            <h2>Goa's Enduring Allure</h2>
            <p>
              Goa offers an enchanting mix of sun, sand, spirituality, and
              adventure. Its diverse offerings leave travelers with lasting
              memories, whether they are exploring vibrant markets, indulging in
              Goan cuisine, or simply soaking in the tranquility of the beaches.
            </p>
            <p>
              Goa’s warmth, hospitality, and captivating beauty make it a place
              that stays with you long after you leave. From its historical
              landmarks to its wild beaches, every corner of Goa promises a
              unique experience that will ignite your senses and touch your
              soul.
            </p>
          </div>
        </div>
      )}

      {/* Read Less Button */}
      {showMore && (
        <button className="read-less-btn" onClick={handleReadMore}>
          Read Less
        </button>
      )}
    </div>
  );
}
