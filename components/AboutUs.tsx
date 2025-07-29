
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Your Premier Partner for <span className="text-brand-orange-600">Pondicherry Exploration</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At 'Ride à la Pondy', we believe that travel is not just about reaching a destination; it's about the entire experience. We are dedicated to providing a premium, comfortable, and safe cab service that transforms your tour of Pondicherry and its surroundings into a collection of cherished memories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our professional drivers are not just experts on the road but also knowledgeable guides who are passionate about sharing the rich culture and history of this beautiful region. With a modern, well-maintained fleet and a commitment to punctuality and customer satisfaction, we are your trusted partners for an unforgettable journey.
            </p>
            <a href="#contact" className="inline-block bg-brand-orange-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-brand-orange-700 transition-colors duration-300">
              Plan Your Trip
            </a>
          </div>
          <div>
            <img 
              src="https://i.postimg.cc/k4kM4hV5/about-us-pondicherry.jpg" 
              alt="Charming street in Pondicherry's French Quarter" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
