"use client";
import { Button, Chip } from "@heroui/react";
import { MapPin, Search, Users } from "lucide-react";
import Link from "next/link";
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
      name: "Namirembe Cathedral",
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
      name: "Canan Land",
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
      <div className="  max-w-md w-full mx-auto relative py-8 px-4">
        <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 h-7 w-7" />
        <input
          type="text"
          placeholder="Search by name, denomination or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-9 h-12 pr-4 text-lg rounded-full w-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
      </div>

      {/* Churches list */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filteredChurches.map((church) => (
          <div
            id="card"
            key={church.id}
            className=" border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 rounded-md"
          >
            <img
              src={church.image}
              alt={church.name}
              className="w-full h-48 object-cover mb-4"
            />

            <div className="px-4">
              <div id="Card header" className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <h1 className="text-xl text-cyan-950 leading-tight">
                    {church.name}
                  </h1>
                  <Chip className="ml-2 flex-shrink-0">
                    {church.denomination}
                  </Chip>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="h-4 w-4 mr-1" />
                  {church.location}
                </div>
                <div className="text-gray-600">{church.description}</div>
              </div>
              {/*  card content */}
              <div className=" flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {church.memberCount} members
                </div>
                <div className="text-blue-600 font-medium">
                  {church.ambassadorCount} ambassadors
                </div>
              </div>
              <button className="w-full bg-cyan-950 text-white py-2 rounded-md mb-5  hover:bg-cyan-700 cursor-pointer">
                <Link href={`/ambassadors/${church.id}`}>Meet Ambassadors</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
      {filteredChurches.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-gray-500">
            No Churches found matching your search
          </p>
          <Button
            onClick={() => setSearchTerm("")}
            className="mt-4"
            variant="ghost"
          >
            Clear Search
          </Button>
        </div>
      )}
    </div>
  );
}

export default FindChurch;
