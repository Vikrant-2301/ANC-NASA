"use client";
import React from "react";
import {
  Mic,
  BookOpen,
  Users,
  Briefcase,
  Hammer,
  Award,
  Music,
  MapPin,
  ShoppingCart,
} from "lucide-react";
import ShineBorder from "@/components/ui/shine-border";

function Activities() {
  const activities = [
    {
      title: "4+ Keynote Speaker",
      icon: <Mic className="h-6 w-6 text-blue-500" />,
    },
    {
      title: "16+ Masterclass",
      icon: <BookOpen className="h-6 w-6 text-purple-500" />,
    },
    {
      title: "36+ Seminar",
      icon: <Users className="h-6 w-6 text-green-500" />,
    },
    {
      title: "4+ Panel Discussion",
      icon: <Briefcase className="h-6 w-6 text-red-500" />,
    },
    {
      title: "67+ Workshop",
      icon: <Hammer className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: "Design Trophies",
      icon: <Award className="h-6 w-6 text-orange-500" />,
    },
    {
      title: "Cultural Performance",
      icon: <Music className="h-6 w-6 text-pink-500" />,
    },
    {
      title: "Experience Zones",
      icon: <MapPin className="h-6 w-6 text-teal-500" />,
    },
    {
      title: "Food & Non-Food Stalls",
      icon: <ShoppingCart className="h-6 w-6 text-indigo-500" />,
    },
  ];

  return (
    <div
      id="activities"
      className="bg-gray-50 min-h-screen py-10 flex flex-col items-center justify-center"
    >
      {/* Header Section */}
      <div className="py-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 w-full text-center text-white">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
          Event Activities
        </h1>
      </div>

      {/* Activities Grid */}
      <div className="max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-6 flex-grow flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {activities.map((activity, index) => (
            <ShineBorder
              key={index}
              className="flex flex-col items-center justify-center rounded-xl shadow-md p-4 sm:p-6 text-center bg-white hover:shadow-lg transition-all duration-300"
              color={["#007BFF", "#6610F2", "#28A745"]}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 shadow-inner">
                {activity.icon}
              </div>
              <h2 className="text-sm sm:text-base font-medium text-gray-700 mt-3">
                {activity.title}
              </h2>
            </ShineBorder>
          ))}
        </div>
      </div>

      {/* Bottom Info */}
      <div className="pb-6 text-center px-4">
        <h2 className="text-sm sm:text-base font-normal text-gray-600 tracking-wide max-w-lg mx-auto">
          200+ activities and experiences all over the university campus
        </h2>
      </div>
    </div>
  );
}

export default Activities;
