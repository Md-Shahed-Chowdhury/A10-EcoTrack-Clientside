import React, { use } from "react";
import { useLoaderData } from "react-router";
import { Calendar, Target, Tag, Users, Clock } from "lucide-react";
const ChallengeDetails = () => {
  const data = useLoaderData();
  const challenge = data.data;

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/2 h-72 rounded-xl overflow-hidden shadow-md">
          <img
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {challenge.title}
          </h1>

          <p className="text-green-600 font-semibold flex items-center gap-2">
            <Tag size={16} /> {challenge.category}
          </p>

          <p className="text-gray-700">{challenge.description}</p>

          <div className="space-y-2 text-gray-700">
            <p className="flex gap-2 items-center">
              <Target size={18} className="text-green-600" />{" "}
              <strong>Target:</strong> {challenge.target}
            </p>

            <p className="flex gap-2 items-center">
              <Clock size={18} className="text-green-600" />{" "}
              <strong>Duration:</strong> {challenge.duration} days
            </p>

            <p className="flex gap-2 items-center">
              <Calendar size={18} className="text-green-600" />{" "}
              <strong>Start:</strong> {challenge.startDate}
            </p>

            <p className="flex gap-2 items-center">
              <Calendar size={18} className="text-green-600" />{" "}
              <strong>End:</strong> {challenge.endDate}
            </p>

            <p className="flex gap-2 items-center">
              <Users size={18} className="text-green-600" />{" "}
              <strong>Participants:</strong> {challenge.participants}
            </p>
          </div>

          <p className="bg-gray-100 p-3 rounded-lg inline-block text-gray-900 font-medium">
            Impact Metric: {challenge.impactMetric}
          </p>
          <button className="btn bg-base-300 block hover:opacity-70 hover:scale-110 transition duration-75">Join Challenge</button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
