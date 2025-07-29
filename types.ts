
export interface TourPackage {
  image: string;
  title: string;
  description: string;
  details: string[];
}

export interface FleetVehicle {
  image: string;
  name: string;
  description: string;
  capacity: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  rating: number;
}

export interface Activity {
  name: string;
  description: string;
}

export interface DayPlan {
  day: number;
  title: string;
  activities: Activity[];
}

export interface HotelRecommendation {
  name: string;
  description: string;
  priceRange: string;
}

export interface AIItinerary {
  itinerary: DayPlan[];
}