import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { FaArrowRight } from "react-icons/fa";
const handleViewChallenge = () => {
  // Logic to view challenge details
  console.log("View Challenge button clicked");
}
const ActiveChallenges = () => {
  const [sliderChallenges, setSliderChallenges] = useState([]);
  useEffect(() => {
    fetch("/challenges.json")
      .then((res) => res.json())
      .then((data) => {
        setSliderChallenges([...data]);
      });
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
        <h2 className=" text-3xl md:text-4xl font-bold">All Challenges</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {sliderChallenges.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 overflow-hidden"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-40 object-cover"
          />

          <div className="p-4">
            <h2 className="text-xl font-semibold mb-1">{item.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{item.category}</p>
            <p className="text-green-600 font-semibold">
              Impact: {item.impactMetric}
            </p>
          </div>
          <button onClick={handleViewChallenge} className="btn bg-base-300 hover:scale-110 ml-5 mb-5 transition duration-100" >View details</button>
        </div>
      ))}
    </div>
    <button className="btn bg-primary text-black hover:bg-base-300 "><NavLink className={`flex  justify-center items-center gap-2`} to='/challenges/add'>Create New Challenge<FaArrowRight /></NavLink></button>
    
    </div>
  );
};

export default ActiveChallenges;
