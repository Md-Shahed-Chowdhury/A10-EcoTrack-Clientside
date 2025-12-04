import React from "react";
import { Leaf, Recycle, Globe } from "lucide-react";

// JSON data for 3 benefits given static by me
const benefits = [
  {
    icon: <Leaf size={32} />, 
    title: "Healthier Environment",
    description: "Reducing pollution and waste creates cleaner air, water, and surroundings for everyone.",
  },
  {
    icon: <Recycle size={32} />, 
    title: "Conserves Resources",
    description: "Sustainable habits reduce strain on natural resources and promote long-term ecological balance.",
  },
  {
    icon: <Globe size={32} />,
    title: "Protects the Planet",
    description: "Going green slows climate change and ensures a safer planet for future generations.",
  },
];

const Benefits = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text-3xl md:text-4xl font-bold">Why Go Green?</h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {benefits.map((item, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
        >
          <div className="text-green-600 mb-4">{item.icon}</div>

          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Benefits;