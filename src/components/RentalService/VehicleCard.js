import React from 'react';

const VehicleCard = ({ vehicle, onSelect }) => {
  return (
    <div className="vehicle-card" onClick={() => onSelect(vehicle)}>
      <img src={vehicle.image} alt={vehicle.name} style={{ width: '200px', height: '150px' }} />
      <h4>{vehicle.name}</h4>
      <p>Type: {vehicle.type}</p>
      <p>Price: ${vehicle.price}/day</p>
    </div>
  );
};

export default VehicleCard;
