
import React from 'react';
import type { TourPackage, FleetVehicle, Testimonial } from './types';

export const tourPackages: TourPackage[] = [
  {
    image: 'https://i.postimg.cc/kXq0z0sV/package-city-trip.jpg',
    title: 'Single Day City Trips',
    description: 'Discover the heart of Pondicherry with our curated city tour.',
    details: ['French Quarter (White Town)', 'Aurobindo Ashram', 'Manakula Vinayagar Temple', 'Promenade Beach', 'Paradise Beach'],
  },
  {
    image: 'https://i.postimg.cc/k5Yt1fV1/package-nearby-attractions.jpg',
    title: 'Nearby Attractions',
    description: 'Explore the rich history and natural beauty surrounding Pondicherry.',
    details: ['Mamallapuram (UNESCO Site)', 'Chidambaram Nataraja Temple', 'Pichavaram Mangrove Forest', 'Auroville Matrimandir'],
  },
  {
    image: 'https://i.postimg.cc/7h1wR5N6/package-pilgrim.jpg',
    title: 'Pilgrim Packages',
    description: 'Embark on a spiritual journey to the region\'s most sacred sites.',
    details: ['Navagraha Sthalam Tour', 'Velankanni Basilica', 'Nagoor Dargah', 'Thirunallar Saneeswaran Temple'],
  },
];

export const fleetVehicles: FleetVehicle[] = [
  {
    image: 'https://i.postimg.cc/W3sT9sFz/fleet-sedan.jpg',
    name: 'Toyota Sedan',
    description: 'Perfect for couples or small families seeking comfort and style for city tours.',
    capacity: '4 + 1 Seater',
  },
  {
    image: 'https://i.postimg.cc/Y0G3R0H8/fleet-innova.jpg',
    name: 'Toyota Innova / Crysta',
    description: 'Spacious and luxurious, ideal for family trips and exploring nearby attractions.',
    capacity: '7 + 1 Seater',
  },
  {
    image: 'https://i.postimg.cc/bN9fW7T2/fleet-traveller.jpg',
    name: '15/22 Seater Traveller',
    description: 'The best choice for large groups, ensuring everyone travels together in comfort.',
    capacity: '15 or 22 Seater',
  },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'An absolutely fantastic experience! The driver was professional, the car was pristine, and the Pondicherry city tour was perfectly planned. Highly recommend Ride a la Pondy!',
    name: 'Ananya Sharma',
    title: 'Tourist from Delhi',
    rating: 5,
  },
  {
    quote: 'We booked the pilgrim package. The entire journey was smooth and comfortable. Their knowledge of the routes and temples is commendable. Made our trip hassle-free.',
    name: 'Ramesh Krishnan',
    title: 'Family from Chennai',
    rating: 5,
  },
  {
    quote: 'The best cab service in Pondicherry, hands down. The Innova was spacious and clean, perfect for our family trip to Mamallapuram. The flash sale made it a great deal!',
    name: 'Priya Mehta',
    title: 'Traveller from Mumbai',
    rating: 4,
  },
];

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.006z" clipRule="evenodd" />
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.5 17.5l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 13.5l.398 1.197a3.375 3.375 0 002.456 2.456L20.5 17.5l-1.197.398a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
);
