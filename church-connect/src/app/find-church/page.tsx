"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";

function FindChurch() {
  const [searchTerm, setSearchTerm] = useState("");

  const churches = [
    {
      id: 1,
      name: "Phaneroo Ministries",
      denomination: "Born Again",
      location: "Ntinda",
      address: "Plot 6 Kyambogo Drive Ntinda",
      memberCount: "1000+",
      description:
        "A dynamic, life transforming and generational impacting ministry with a vision too transform nations with the word of God",
      ambassadorCount: 10,
      image: "/church1.jpg",
    },
    {
      id: 2,
      name: "New Life Fellowship",
      denomination: "Pentecostal",
      location: "Bukasa",
      address: "Bukasa Road",
      memberCount: "100-200",
      description:
        "Dynamic worship and a heart for spiritual growth and community",
      ambassadorCount: 3,
      image: "/church1.jpg",
    },
    {
      id: 3,
      name: "Namirembe Cathedral Church",
      denomination: "Anglican",
      location: "Namirembe",
      address: "Cathedral Hill Road",
      memberCount: "500-1000",
      description:
        "A welcoming community focused on grace, love and service to others",
      ambassadorCount: 6,
      image: "/church1.jpg",
    },
    {
      id: 4,
      name: "Rubaga Cathedral",
      denomination: "Catholic",
      location: "Kampala",
      address: "Rubaga Road",
      memberCount: "1000+",
      description:
        "Historic Catholic parish serving the community for over 100 years",
      ambassadorCount: 8,
      image: "/church1.jpg",
    },
    {
      id: 5,
      name: "House of Prayer Ministries",
      denomination: "Born Again",
      location: "Makerere",
      address: "Makerere, Kikoni",
      memberCount: "200-500",
      description:
        "Engage in deliverance and spiritual warfare against demonic agents",
      ambassadorCount: 4,
      image: "/church1.jpg",
    },
  ];

  const filteredChurches = churches.filter(
    (church) =>
      church.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      church.denomination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      church.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" px-4 py-8 flex flex-col items-center justify-center">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-950 mb-4">
          Find Your Church
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover Welcoming Church Communities in your area
        </p>
      </div>

      {/* Search field */}
      <div className="  max-w-md w-full mx-auto relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Search by name, denomination or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 h-12 pr-4 text-lg rounded-full w-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>
    </div>
  );
}

export default FindChurch;
