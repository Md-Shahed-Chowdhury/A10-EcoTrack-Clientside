import React from "react";
import { UserPlus, BarChart2, Share2 } from "lucide-react";

const steps = [
  {
    icon: <UserPlus size={36} className="text-white" />,
    title: "Join a Challenge",
    description:
      "Select any eco-friendly challenge and join the community to start your sustainable journey.",
    step: 1,
    bgColor: "bg-green-500",
  },
  {
    icon: <BarChart2 size={36} className="text-white" />,
    title: "Track Progress",
    description:
      "Monitor your impact and see how much you’ve contributed towards a greener planet.",
    step: 2,
    bgColor: "bg-blue-500",
  },
  {
    icon: <Share2 size={36} className="text-white" />,
    title: "Share Tips",
    description:
      "Share your eco-friendly tips with the community to inspire others and exchange ideas.",
    step: 3,
    bgColor: "bg-teal-500",
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text-3xl md:text-4xl font-bold">How It Works</h2>
      <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((stepItem, index) => (
          <div
            key={index}
            className={`${stepItem.bgColor} rounded-3xl p-8 flex flex-col items-center text-center shadow-xl transform transition hover:-translate-y-3 hover:scale-105`}
          >
            <div className="text-white text-2xl font-bold mb-2 rounded-full w-10 h-10 flex items-center justify-center bg-black/20">
              {stepItem.step}
            </div>
            <div className="mb-4">{stepItem.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">
              {stepItem.title}
            </h3>
            <p className="text-white text-sm leading-relaxed">
              {stepItem.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
