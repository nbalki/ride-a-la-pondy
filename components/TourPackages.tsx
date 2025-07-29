
import React from 'react';
import { tourPackages } from '../constants';
import type { TourPackage } from '../types';

const PackageCard: React.FC<{ pkg: TourPackage }> = ({ pkg }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
      <p className="text-gray-600 mb-4 h-12">{pkg.description}</p>
      <ul className="space-y-2 mb-6">
        {pkg.details.map((detail, index) => (
          <li key={index} className="flex items-center text-sm text-gray-700">
            <svg className="w-4 h-4 mr-2 text-brand-orange-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            {detail}
          </li>
        ))}
      </ul>
      <a href="#contact" className="inline-block w-full text-center bg-gray-100 text-brand-orange-600 font-semibold py-3 px-6 rounded-lg group-hover:bg-brand-orange-600 group-hover:text-white transition-colors duration-300">
        Book This Package
      </a>
    </div>
  </div>
);

const TourPackages: React.FC = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Curated Tour Packages</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Journeys designed to give you the best of Pondicherry and beyond.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tourPackages.map((pkg) => (
            <PackageCard key={pkg.title} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;
