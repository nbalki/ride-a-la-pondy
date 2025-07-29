
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import TourPackages from './components/TourPackages';
import AITravelPlanner from './components/AITravelPlanner';
import Fleet from './components/Fleet';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-poppins">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <TourPackages />
        <AITravelPlanner />
        <Fleet />
        <Testimonials />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
};

export default App;