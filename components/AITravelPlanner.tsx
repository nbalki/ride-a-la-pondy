import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import type { DayPlan, HotelRecommendation } from '../types';
import { SparklesIcon } from '../constants';

const AITravelPlanner: React.FC = () => {
    const [interests, setInterests] = useState('');
    const [days, setDays] = useState('3');
    const [budget, setBudget] = useState('Mid-range');
    const [travelerType, setTravelerType] = useState('Couple');
    const [itinerary, setItinerary] = useState<DayPlan[] | null>(null);
    const [hotelRecommendations, setHotelRecommendations] = useState<HotelRecommendation[] | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleGenerateItinerary = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!interests || !days) {
            setError('Please fill in all fields to generate an itinerary.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setItinerary(null);
        setHotelRecommendations(null);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

            const prompt = `You are a friendly and knowledgeable travel expert specializing in Pondicherry. A user wants a personalized travel itinerary and hotel recommendations.

            **Trip Duration:** ${days} day(s).
            **User Interests:** ${interests}.
            **Budget:** ${budget}.
            **Traveler Type:** ${travelerType}.
            
            Based on these details, generate a detailed day-by-day itinerary for a trip to Pondicherry. For each day, provide a catchy title and a list of 3-4 suggested activities with a brief, enticing description for each.
            
            Additionally, provide 3 hotel recommendations that match the user's budget and traveler type. For each hotel, provide its name, a short description of why it's a good fit, and a typical price range (e.g., "₹3000-₹5000/night").

            Ensure the entire response adheres to the provided JSON schema.`;

            const schema = {
                type: Type.OBJECT,
                properties: {
                    itinerary: {
                        type: Type.ARRAY,
                        description: "An array of daily plans for the trip.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                day: { type: Type.NUMBER, description: "The day number." },
                                title: { type: Type.STRING, description: "A catchy title for the day's plan." },
                                activities: {
                                    type: Type.ARRAY,
                                    description: "List of activities for the day.",
                                    items: {
                                        type: Type.OBJECT,
                                        properties: {
                                            name: { type: Type.STRING, description: "Name of the place or activity." },
                                            description: { type: Type.STRING, description: "A short, engaging description of the activity." }
                                        },
                                        required: ["name", "description"]
                                    }
                                }
                            },
                            required: ["day", "title", "activities"]
                        }
                    },
                    hotelRecommendations: {
                        type: Type.ARRAY,
                        description: "An array of hotel recommendations.",
                        items: {
                            type: Type.OBJECT,
                            properties: {
                                name: { type: Type.STRING, description: "Name of the hotel." },
                                description: { type: Type.STRING, description: "A short, engaging description of the hotel." },
                                priceRange: { type: Type.STRING, description: "Estimated price per night." }
                            },
                            required: ["name", "description", "priceRange"]
                        }
                    }
                },
                required: ["itinerary", "hotelRecommendations"]
            };

            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: schema,
                },
            });

            const resultJson = JSON.parse(response.text.trim());
            setItinerary(resultJson.itinerary);
            setHotelRecommendations(resultJson.hotelRecommendations);

            // Now, generate the image in a separate call
            try {
                const imagePrompt = `A stunning, high-quality, photorealistic travel poster for a trip to Pondicherry, India. The scene should capture the essence of these interests: ${interests}. The atmosphere should be perfect for a ${travelerType}. The image should be vibrant, inviting, and in a cinematic style. Do not include any text, words, or letters in the image.`;

                const imageResponse = await ai.models.generateImages({
                    model: 'imagen-3.0-generate-002',
                    prompt: imagePrompt,
                    config: {
                        numberOfImages: 1,
                        outputMimeType: 'image/jpeg',
                        aspectRatio: '16:9',
                    },
                });
                
                if (imageResponse.generatedImages && imageResponse.generatedImages.length > 0) {
                    const base64ImageBytes: string = imageResponse.generatedImages[0].image.imageBytes;
                    const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
                    setGeneratedImage(imageUrl);
                }

            } catch (imgErr) {
                console.error("AI Image Generation Error:", imgErr);
                // This is a non-critical error, so we'll log it but not show an error to the user.
                // The itinerary will still be displayed.
            }

        } catch (err) {
            console.error("AI Itinerary Generation Error:", err);
            setError('Sorry, we couldn\'t generate an itinerary at this time. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };
    
    const inputClass = "w-full bg-gray-800 text-white rounded-lg px-4 py-3 border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brand-orange-500 transition-colors";

    return (
        <section id="ai-planner" className="py-20 bg-brand-orange-50/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 flex items-center justify-center gap-3">
                        <SparklesIcon className="w-8 h-8 text-brand-orange-500" />
                        AI Travel Assistant
                    </h2>
                    <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Describe your perfect Pondicherry trip and let our AI craft a personalized itinerary and hotel plan for you.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg border border-gray-200/80">
                    <form onSubmit={handleGenerateItinerary} className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
                        <div>
                            <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-1">Your Interests</label>
                            <input
                                type="text"
                                id="interests"
                                value={interests}
                                onChange={(e) => setInterests(e.target.value)}
                                placeholder="e.g., history, beaches, food"
                                className={inputClass}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="days" className="block text-sm font-medium text-gray-700 mb-1">Number of Days</label>
                            <input
                                type="number"
                                id="days"
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                min="1"
                                max="10"
                                className={inputClass}
                                required
                            />
                        </div>
                         <div>
                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Your Budget</label>
                            <select id="budget" value={budget} onChange={(e) => setBudget(e.target.value)} className={inputClass}>
                                <option>Budget</option>
                                <option>Mid-range</option>
                                <option>Luxury</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="travelerType" className="block text-sm font-medium text-gray-700 mb-1">Traveler Type</label>
                            <select id="travelerType" value={travelerType} onChange={(e) => setTravelerType(e.target.value)} className={inputClass}>
                                <option>Solo</option>
                                <option>Couple</option>
                                <option>Family</option>
                                <option>Group</option>
                            </select>
                        </div>
                        <button type="submit" disabled={isLoading} className="md:col-span-2 w-full bg-brand-orange-600 text-white font-bold py-3 px-10 rounded-lg hover:bg-brand-orange-700 transition-colors duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center">
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Generating Your Trip...
                                </>
                            ) : "✨ Generate My Trip"}
                        </button>
                    </form>
                </div>

                {error && <p className="text-center text-red-600 mt-6">{error}</p>}

                <div className="mt-12 max-w-4xl mx-auto">
                    {generatedImage && (
                        <div className="mb-12 animate-fade-in">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Your AI-Generated Trip Banner</h2>
                            <img
                                src={generatedImage}
                                alt={`AI-generated image for a trip to Pondicherry focusing on ${interests}`}
                                className="w-full h-auto rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    )}
                    {itinerary && (
                        <div className="space-y-8 animate-fade-in">
                            {itinerary.map((dayPlan) => (
                                <div key={dayPlan.day} className="bg-white p-6 rounded-xl shadow-md border border-gray-200/60">
                                    <h3 className="text-xl font-bold text-brand-orange-600 mb-4 flex items-center">
                                        <span className="bg-brand-orange-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mr-3">{dayPlan.day}</span>
                                        {dayPlan.title}
                                    </h3>
                                    <ul className="space-y-4">
                                        {dayPlan.activities.map((activity, index) => (
                                            <li key={index} className="pl-5 border-l-2 border-brand-orange-200">
                                                <h4 className="font-semibold text-gray-800">{activity.name}</h4>
                                                <p className="text-gray-600 text-sm">{activity.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    )}
                    {hotelRecommendations && (
                         <div className="mt-12 animate-fade-in">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🏨 Hotel Suggestions</h3>
                            <div className="space-y-6">
                                {hotelRecommendations.map((hotel, index) => (
                                    <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200/60">
                                        <div className="flex justify-between items-start">
                                            <h4 className="text-lg font-bold text-gray-800">{hotel.name}</h4>
                                            <span className="text-sm font-semibold text-brand-orange-600 bg-brand-orange-100 py-1 px-3 rounded-full">{hotel.priceRange}</span>
                                        </div>
                                        <p className="text-gray-600 mt-2">{hotel.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <style>{`
              @keyframes fade-in {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fade-in 0.5s ease-out forwards;
              }
              #ai-planner input, #ai-planner select {
                color: #FFF;
              }
              #ai-planner select {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%239CA3AF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
                background-repeat: no-repeat;
                background-position: right 1rem center;
                background-size: 0.8em;
                padding-right: 2.5rem;
              }
              /* Fix for autofill background color on Webkit browsers */
              #ai-planner input:-webkit-autofill,
              #ai-planner input:-webkit-autofill:hover,
              #ai-planner input:-webkit-autofill:focus,
              #ai-planner input:-webkit-autofill:active {
                  -webkit-box-shadow: 0 0 0 30px #1F2937 inset !important;
                  -webkit-text-fill-color: #FFF !important;
              }
            `}</style>
        </section>
    );
};

export default AITravelPlanner;