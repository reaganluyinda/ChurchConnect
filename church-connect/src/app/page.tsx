import { MessageCircle, Search, Users } from "lucide-react";
import Link from "next/link";

function Home() {
  const features = [
    {
      id: 1,
      title: "Search Churches",
      icon: Search,
      info: "Browse through local churches and Find ones that align with your values and interests.",
      bg: "bg-blue-200",
      color: "text-blue-700",
    },
    {
      id: 2,
      title: "Meet Ambassadors",
      icon: Users,
      info: "Connect with friendly church ambassadors who are ready to welcome you to answer questions.",
      bg: "bg-green-200",
      color: "text-green-700",
    },
    {
      id: 3,
      title: "Start Chatting",
      icon: MessageCircle,
      info: "Begin meaningful conversations and get support you need on your spiritual journey.",
      bg: "bg-purple-200",
      color: "text-purple-700",
    },
  ];

  return (
    <div className="">
      {/* Hero section */}
      <div className="flex flex-col text-white items-center justify-center text-center gap-12 px-4 md:px-32 py-4 bg-[url('/hero.jpg')] bg-cover bg-center h-[80vh] w-full">
        <h1 className="md:text-6xl text-4xl font-bold leading-tight">
          Connect with your Local{" "}
          <span className="text-blue-600 block">Church Community</span>
        </h1>
        <p className="md:text-[28px] text-lg leading-relaxed">
          Find welcoming churches near you and connect with friendly ambassadors
          who can answer your questions and help you feel at home
        </p>
      </div>

      {/* Who we are section */}
      <div className=" py-8 md:py-12  justify-around flex flex-col md:flex-row gap-6 px-4 md:px-32 text-cyan-950 items-center">
        <h1 className="md:w-1/2 text-center font-semibold text-[40px]">
          Who we are
        </h1>
        <p className="md:w-1/2 text-center md:text-right ">
          ChurchConnect helps people easily find welcoming churches, build
          deeper spiritual connections, and feel at home in their faith journey
          by offering a trusted platform to discover and engage with nearby
          faith communities.
        </p>
      </div>

      {/* Features section */}

      <div className="py-20">
        <div className="mb-16 text-center">
          <h1 className="text-3xl font-bold text-cyan-950 mb-4">
            How it works
          </h1>
          <p className="text-gray-600 text-lg">
            Simple steps to connect with your church community
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className={
                  " text-center px-4 py-8 rounded-md cursor-pointer border-0 shadow-lg transition-shadow hover:shadow-xl"
                }
              >
                <div
                  className={`mx-auto w-16 h-16 ${feature.bg} rounded-full flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h1 className=" text-xl font-medium text-cyan-950">
                  {feature.title}
                </h1>
                <p className="text-base text-gray-600">{feature.info}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* connect section */}
      <div className="relative">
        <div className="absolute inset-0 bg-[url('/connect.jpg')] bg-cover bg-center z-0" />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col md:flex-row gap-6 justify-around py-16 items-center max-sm:text-center text-white">
          <div className="gap-4">
            <h1 className="text-[40px] font-semibold">Ready to connect?</h1>
            <h1 className="text-[20px]">
              Join thousands of people finding their
              <br /> spiritual home through ChurchConnect
            </h1>
          </div>
          <Link href="/find-church">
            <button className="bg-cyan-950 text-xl px-8 py-4 rounded-md text-white cursor-pointer">
              Start your Journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
