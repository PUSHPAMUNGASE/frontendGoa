import React, { useState } from "react";
import "./PackageFilter.css"; // Import external CSS (optional)

const packages = [
  { id: 1, name: "Beach Adventure", price: 5000, category: "Adventure" },
  { id: 2, name: "Luxury Spa", price: 8000, category: "Relaxation" },
  { id: 3, name: "Cultural Tour", price: 3000, category: "Cultural & Heritage" },
  { id: 4, name: "Wildlife Safari", price: 6000, category: "Nature & Wildlife" },
  { id: 5, name: "Family Fun", price: 4000, category: "Family & Kids" },
  { id: 6, name: "Goa Nightlife", price: 7000, category: "Nightlife & Entertainment" },
];

// Unique categories for filtering
const categories = [...new Set(packages.map((pkg) => pkg.category))];

export default function PackageFilter() {
  const [priceRange, setPriceRange] = useState(10000);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // Handle category selection
  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  // Filter packages based on price and category
  const filteredPackages = packages
    .filter((pkg) => pkg.price <= priceRange)
    .filter((pkg) => selectedCategories.length === 0 || selectedCategories.includes(pkg.category));

  // Sorting logic
  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortOrder === "lowToHigh") return a.price - b.price;
    if (sortOrder === "highToLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="filter-container p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Filter Goa Packages</h2>

      {/* Price Filter */}
      <div className="filter-section mb-6">
        <label className="block text-lg font-semibold text-gray-700 mb-2">
          Max Price: <span className="text-green-600 font-bold">₹{priceRange}</span>
        </label>
        <input
          type="range"
          min="3000"
          max="10000"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="w-full cursor-pointer"
        />
      </div>

      {/* Category Filter */}
      <div className="filter-section mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Filter by Category</h3>
        <div className="category-filters flex flex-wrap gap-3">
          {categories.map((category) => (
            <label key={category} className="flex items-center gap-2 bg-gray-200 px-3 py-1 rounded-lg cursor-pointer hover:bg-gray-300">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      {/* Sorting */}
      <div className="filter-section mb-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Sort by Price</h3>
        <select
          className="border p-2 rounded w-full bg-white cursor-pointer"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
      </div>

      {/* Display Filtered Packages */}
      <div className="package-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPackages.length > 0 ? (
          sortedPackages.map((pkg) => (
            <div key={pkg.id} className="package-card p-4 border rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300">
              <h3 className="text-lg font-semibold text-gray-800">{pkg.name}</h3>
              <p className="text-gray-600">Category: {pkg.category}</p>
              <p className="text-green-600 font-bold text-lg">₹{pkg.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">No packages found in this range/category.</p>
        )}
      </div>
    </div>
  );
}
