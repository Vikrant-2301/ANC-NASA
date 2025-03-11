"use client";
import React, { useState } from "react";
import { MapPin, Clock, Users } from "lucide-react";

const Venue = () => {
  const venue = {
    images: [
      "/assets/lpu1.jpeg",
      "/assets/lpu2.jpg",
      "/assets/lpu3.jpg",
      "/assets/lpu4.jpg",
    ],
    location: "Lovely Professional University, Punjab, India",
    eventDuration: "4 Days (May 29 - June 1, 2025)",
    timing: "09:00 AM - 06:00 PM",
    capacity: "6000+ attendees",
    facilities: [
      "State-of-the-art auditorium",
      "Outdoor activity zones",
      "Multiple workshop spaces",
      "Meeting rooms",
      "Exhibition areas",
      "Performance stages",
      "Food court",
      "Technical support",
    ],
  };

  // Carousel State
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === venue.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? venue.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div id="venue" className="bg-gray-50 py-10">
      {/* Header Section */}
      <div className="relative py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold tracking-wide uppercase">
          Venue
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center gap-12 mt-10">
        {/* Left Side - Image Carousel */}
        <div className="w-full md:w-1/2 relative flex justify-center">
          <img
            src={venue.images[currentIndex]}
            alt="Venue"
            className="w-full h-[320px] md:h-[400px] rounded-xl object-cover transition-all duration-500 shadow-lg"
          />

          {/* Carousel Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black transition"
          >
            ❮
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full shadow-md hover:bg-black transition"
          >
            ❯
          </button>
        </div>

        {/* Right Side - Venue Details with Shiny Borders */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-6">
          {[
            { label: "Location", icon: <MapPin />, value: venue.location },
            {
              label: "Event Duration",
              icon: <Clock />,
              value: venue.eventDuration,
            },
            { label: "Timing", icon: <Clock />, value: venue.timing },
            { label: "Capacity", icon: <Users />, value: venue.capacity },
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 border-2  rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-3 text-black">
                <span className="h-6 w-6">{item.icon}</span>
                <h2 className="text-lg font-semibold">{item.label}</h2>
              </div>
              <p className="text-gray-700 mt-2 text-md">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Venue Facilities Section */}
      <div className="mt-16 max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-6 uppercase">
          Venue Facilities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {venue.facilities.map((facility, index) => (
            <div
              key={index}
              className="p-4 border-2  rounded-lg bg-white shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <p className="text-lg font-medium text-gray-800">{facility}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Venue;
