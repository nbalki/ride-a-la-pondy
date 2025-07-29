
import React, { useState } from 'react';

const Hero: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle the form submission here.
    alert(`Enquiry submitted! Name: ${name}, Phone: ${phone}, Date: ${date}`);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center text-white bg-cover bg-center py-20 px-4"
      style={{ backgroundImage: "url('https://storage.googleapis.com/proudcity/me/headless/images/hero-pondicherry-coast-v2.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative container mx-auto text-center">
        {/* FLASH SALE Banner */}
        <div className="absolute -top-12 right-0 md:top-8 md:right-8 -rotate-12 z-20">
            <div className="bg-red-600 text-white font-bold py-3 px-6 rounded-lg shadow-xl transform">
                <p className="text-xl leading-none">FLASH SALE!</p>
                <p className="text-base font-medium">20% OFF City Tours</p>
            </div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Experience Pondicherry in Style
            </h1>
            <p className="text-lg md:text-xl font-light text-gray-200 mb-8 max-w-3xl mx-auto">
              Your premium journey through French architecture, serene beaches, and spiritual havens awaits.
            </p>

            {/* Form Container */}
            <div className="bg-gray-800/40 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-2xl border border-gray-600/30">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-6 items-end">
                {/* Name Input */}
                <div className="text-left">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name" 
                    className="w-full bg-gray-900/50 border border-gray-500/80 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-orange-500 transition-shadow"
                    required 
                  />
                </div>
                {/* Phone Input */}
                <div className="text-left">
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-300">Phone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Phone Number" 
                    className="w-full bg-gray-900/50 border border-gray-500/80 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-orange-500 transition-shadow"
                    required 
                  />
                </div>
                {/* Date Input */}
                <div className="text-left">
                  <label htmlFor="date" className="block text-sm font-medium mb-2 text-gray-300">Travel Date</label>
                  <input 
                    type="text" 
                    id="date"
                    value={date}
                    placeholder="dd-mm-yyyy"
                    onFocus={(e) => (e.target.type = 'date')}
                    onBlur={(e) => { if (!e.target.value) e.target.type = 'text'; }}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-gray-900/50 border border-gray-500/80 rounded-lg py-3 px-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-orange-500 transition-shadow date-input"
                    required 
                  />
                </div>
                {/* Submit Button */}
                <button type="submit" className="w-full bg-brand-orange-600 hover:bg-brand-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg h-[50px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-brand-orange-500">
                  Enquire Now
                </button>
              </form>
            </div>
        </div>
      </div>
      {/* Style to make date picker icon visible on dark backgrounds */}
      <style>{`
        .date-input::-webkit-calendar-picker-indicator {
            filter: invert(1);
            cursor: pointer;
            opacity: 0.8;
        }
        .date-input::-webkit-calendar-picker-indicator:hover {
            opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Hero;
