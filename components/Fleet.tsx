
import React from 'react';
import { fleetVehicles } from '../constants';
import type { FleetVehicle } from '../types';

const VehicleCard: React.FC<{ vehicle: FleetVehicle }> = ({ vehicle }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden group">
    <div className="overflow-hidden">
      <img 
        src={vehicle.image} 
        alt={vehicle.name} 
        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="p-6 bg-white">
      <h3 className="text-xl font-bold text-gray-900">{vehicle.name}</h3>
      <p className="text-brand-orange-600 font-semibold mt-1">{vehicle.capacity}</p>
      <p className="text-gray-600 mt-3">{vehicle.description}</p>
    </div>
  </div>
);

const Fleet: React.FC = () => {
  return (
    <section id="fleet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Modern Fleet</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Travel in comfort and safety with our range of well-maintained vehicles.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fleetVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
