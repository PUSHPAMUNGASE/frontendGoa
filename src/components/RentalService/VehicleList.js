import React, { useState } from 'react';
import VehicleCard from './VehicleCard';
import DatePicker from 'react-datepicker';
 import "react-datepicker/dist/react-datepicker.css";
import "./Rental.css";
const vehicles = [
  { id: 1, name: 'Honda Civic Sedan', type: 'Sedan', price: 50, image: '/images/honda.jpg' },
  { id: 2, name: 'Toyota RAV4 SUV', type: 'SUV', price: 80, image: '/images/toyota.jpg' },
  { id: 3, name: 'Yamaha R1 Bike', type: 'Bike', price: 30, image: '/images/yamaha.jpg' },
  // Add more vehicles as needed
];

const VehicleList = () => {
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleSelectVehicle = (vehicle) => {
    setSelectedVehicle(vehicle);
  };

  return (
    <div>
      <h2>Vehicle Rentals</h2>

      {/* Filters and Date Picker */}
      <div>
        <h3>Filter by Vehicle Type</h3>
        <label>Pickup Date</label>
        <DatePicker selected={pickupDate} onChange={date => setPickupDate(date)} />
        <label>Return Date</label>
        <DatePicker selected={returnDate} onChange={date => setReturnDate(date)} />

        <div>
          <h3>Select Vehicle</h3>
          {vehicles.map(vehicle => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} onSelect={handleSelectVehicle} />
          ))}
        </div>

        {selectedVehicle && (
          <div>
            <h3>Booking Summary</h3>
            <p>Vehicle: {selectedVehicle.name}</p>
            <p>Price per day: ${selectedVehicle.price}</p>
            <p>Rental Duration: {pickupDate && returnDate ? ((returnDate - pickupDate) / (1000 * 3600 * 24)) : 'N/A'} Days</p>
            <button onClick={() => alert("Booking Confirmed!")}>Confirm Booking</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleList;
