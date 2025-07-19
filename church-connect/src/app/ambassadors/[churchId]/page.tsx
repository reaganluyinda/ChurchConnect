"use client";
import { Avatar, Button, Chip } from "@heroui/react";
import { Clock, MessageCircle, Star } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

type Ambassador = {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  bio: string;
  rating: number;
  responseTime: string;
  isOnline: boolean;
};

function Ambassadors() {
  const { churchId } = useParams();
  const id = Number(churchId);

  // mock church data
  const churches = [
    { id: 1, name: "Phaneroo Ministries", location: "Ntinda" },
    { id: 2, name: "New Life Fellowship", location: "Bukasa" },
    { id: 3, name: "Namirembe Cathedral", location: "Namirembe" },
    { id: 4, name: "Rubaga Cathedral", location: "Kampala" },
    { id: 5, name: "Canan Land", location: "Makerere" },
  ];

  //   Mock data for ambassadors
  const ambassadors: Record<number, Ambassador[]> = {
    1: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "Welcome Team Leader",
        experience: "5 years",
        specialties: ["New Members", "Families", "Community Events"],
        bio: "I love helping new families feel welcomed and find their place in our church community.",
        rating: 4.9,
        responseTime: "Usually responds within 2 hours",
        isOnline: true,
      },
      {
        id: 2,
        name: "Michael Ochen",
        role: "Youth Pastor",
        experience: "3 years",
        specialties: ["Young Adults", "Students", "Bible Study"],
        bio: "Passionate about connecting with young people and helping them grow in their faith journey.",
        rating: 4.8,
        responseTime: "Usually responds within 1 hour",
        isOnline: true,
      },
      {
        id: 3,
        name: "Emma Rodriguez",
        role: "Community Outreach",
        experience: "7 years",
        specialties: ["Community Service", "Seniors", "Support Groups"],
        bio: "Dedicated to serving our community and helping people find support and connection.",
        rating: 5.0,
        responseTime: "Usually responds within 4 hours",
        isOnline: false,
      },
      {
        id: 4,
        name: "David Thompson",
        role: "Pastoral Care",
        experience: "10 years",
        specialties: ["Counseling", "Prayer", "Life Transitions"],
        bio: "Here to provide spiritual guidance and support during life's important moments.",
        rating: 4.9,
        responseTime: "Usually responds within 3 hours",
        isOnline: true,
      },
    ],
    2: [
      {
        id: 5,
        name: "Jennifer Wilson",
        role: "Hospitality Coordinator",
        experience: "6 years",
        specialties: ["Newcomers", "Events", "Small Groups"],
        bio: "Love making everyone feel at home and connected to our church family.",
        rating: 4.7,
        responseTime: "Usually responds within 2 hours",
        isOnline: true,
      },
    ],
    3: [
      {
        id: 6,
        name: "Brian Kasumba",
        role: "Discipleship Leader",
        experience: "4 years",
        specialties: ["Bible Study", "New Believers", "Mentorship"],
        bio: "Passionate about helping new believers grow and stay rooted in the Word.",
        rating: 4.8,
        responseTime: "Usually responds within 1 hour",
        isOnline: true,
      },
      {
        id: 7,
        name: "Grace Namutebi",
        role: "Women's Ministry Coordinator",
        experience: "8 years",
        specialties: ["Women's Affairs", "Prayer Groups", "Community Outreach"],
        bio: "I love empowering women to connect with God and one another in sisterhood.",
        rating: 5.0,
        responseTime: "Usually responds within 3 hours",
        isOnline: false,
      },
      {
        id: 8,
        name: "Samuel Mbabazi",
        role: "Media & Tech Support",
        experience: "5 years",
        specialties: ["Media", "Live Streaming", "Technical Assistance"],
        bio: "I make sure the tech runs smoothly so the message can reach far and wide.",
        rating: 4.6,
        responseTime: "Usually responds within 30 minutes",
        isOnline: true,
      },
    ],
    4: [
      {
        id: 9,
        name: "Doreen Akello",
        role: "Children's Ministry Coordinator",
        experience: "6 years",
        specialties: ["Kids Ministry", "Sunday School", "Parent Engagement"],
        bio: "My heart is for the little ones — helping them know God's love in fun, simple ways.",
        rating: 4.9,
        responseTime: "Usually responds within 2 hours",
        isOnline: true,
      },
      {
        id: 10,
        name: "Jacob Tumusiime",
        role: "Men’s Fellowship Leader",
        experience: "7 years",
        specialties: ["Men’s Ministry", "Accountability Groups", "Counseling"],
        bio: "Helping men grow spiritually and lead in their homes and communities is my mission.",
        rating: 4.8,
        responseTime: "Usually responds within 1 hour",
        isOnline: false,
      },
      {
        id: 11,
        name: "Anita Kaggwa",
        role: "Music & Worship Leader",
        experience: "5 years",
        specialties: [
          "Praise & Worship",
          "Choir Coordination",
          "Creative Arts",
        ],
        bio: "Worship is a lifestyle, and I’m here to help you find your expression in Christ.",
        rating: 5.0,
        responseTime: "Usually responds within 45 minutes",
        isOnline: true,
      },
    ],
  };

  const church = churches.find((c) => c.id === id);

  const churchAmbassadors = ambassadors[id] || [];

  if (!church) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Church Not Found</h2>
          <Button>
            <Link href="/find-church">Back to Churches</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto px-4 py-8">
      {/* Church Info */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-cyan-950 mb-2">{church.name}</h2>
        <p className="text-gray-600 text-lg mb-6">{church.location}</p>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Connect with our friendly ambassadors who are here to welcome you,
          answer your questions, and help you feel at home in our community.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {churchAmbassadors.map((ambassador) => (
          <div
            key={ambassador.id}
            className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg px-4 pb-4"
          >
            <div className="text-center pb-4">
              <div className="relative inline-block">
                <Avatar
                  showFallback
                  src="/user1.jpg"
                  className="w-20 h-20 mx-auto"
                />
                {ambassador.isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full"></div>
                )}
              </div>
              <h1 className="text-xl text-cyan-950">{ambassador.name}</h1>
              <p className="text-blue-600 font-medium">{ambassador.role}</p>
            </div>
            <div className="flex items-center justify-center space-x-1 mt-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{ambassador.rating}</span>
              <span className="text-gray-500 text-sm">
                {ambassador.experience}
              </span>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600 text-sm leading-relaxed">
                {ambassador.bio}
              </p>
              <div id="speciality">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Specializes in:
                </p>
                <div className="flex flex-wrap gap-1">
                  {ambassador.specialties.map((specialty, index) => (
                    <Chip key={index} className="text-xs bg-cyan-100 ">
                      {specialty}
                    </Chip>
                  ))}
                </div>
              </div>
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <Clock className="h-3 w-3 mr-1" />
                {ambassador.responseTime}
              </div>
            </div>

            <button className="w-full bg-cyan-950 text-white py-2 rounded-md mb-5">
              <Link
                href={`/chat/${ambassador.id}`}
                className="flex flex-row items-center justify-center"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Start Conversation
              </Link>
            </button>
          </div>
        ))}
      </div>
      {churchAmbassadors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            No ambassadors available for this church yet.
          </p>
          <Button variant="ghost">
            <Link href="/find-church">Browse Other Churches</Link>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Ambassadors;
