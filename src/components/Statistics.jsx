import React from "react";

const stats = [
  {
    icon: "🌍",
    title: "Total CO₂ Saved",
    data: "4580 kg CO₂",
  },
  {
    icon: "🧴♻️",
    title: "Plastic Waste Reduced",
    data: "1320 kg",
  },
  {
    icon: "👥",
    title: "Active Eco Participants",
    data: "842",
  },
];
const Statistics = () => {
  return (
    <div>
        <h1 className="font-bold text-center text-3xl md:text-4xl">Live Statistics</h1>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 flex flex-col items-center text-center border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-5xl mb-3">{stat.icon}</div>
          <h2 className="text-xl font-semibold mb-1">{stat.title}</h2>
          <p className="text-2xl font-bold text-green-600">{stat.data}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Statistics;
