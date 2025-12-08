import { useLoaderData } from "react-router";
import { Calendar, Target, Tag, Users, Clock } from "lucide-react";
import ContextProvider, { MyContext } from "../provider/ContextProvider";
import useAxios from "../hooks/UseAxios";
import { toast } from "react-toastify";
import { useState } from "react";



const ChallengeDetails = () => {
  const data = useLoaderData();
  const challenge = data.data;
  const [challengeData,setChallengeData] = useState(challenge);
   const axiosInstance = useAxios();
  const handleJoinChallenge = (id) => {
    // Logic to join the challenge
    console.log(`Joining challenge with ID: ${id}`);
    axiosInstance.post(`/challenge/join/${id}`).then((data) => {
      if (data.data.insertedId) {
        toast.success("Successfully joined the challenge");
      }

  })
  axiosInstance.patch(`/challenges/${id}`,challengeData).then(data =>{
    console.log(data.data);
    setChallengeData({...challengeData,participants:challengeData.participants+1})
  })
};

  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/2 h-72 rounded-xl overflow-hidden shadow-md">
          <img
            src={challengeData.imageUrl}
            alt={challengeData.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-3xl font-bold text-gray-900">
            {challengeData.title}
          </h1>

          <p className="text-green-600 font-semibold flex items-center gap-2">
            <Tag size={16} /> {challengeData.category}
          </p>

          <p className="text-gray-700">{challengeData.description}</p>

          <div className="space-y-2 text-gray-700">
            <p className="flex gap-2 items-center">
              <Target size={18} className="text-green-600" />{" "}
              <strong>Target:</strong> {challengeData.target}
            </p>

            <p className="flex gap-2 items-center">
              <Clock size={18} className="text-green-600" />{" "}
              <strong>Duration:</strong> {challengeData.duration} days
            </p>

            <p className="flex gap-2 items-center">
              <Calendar size={18} className="text-green-600" />{" "}
              <strong>Start:</strong> {challengeData.startDate}
            </p>

            <p className="flex gap-2 items-center">
              <Calendar size={18} className="text-green-600" />{" "}
              <strong>End:</strong> {challengeData.endDate}
            </p>

            <p className="flex gap-2 items-center">
              <Users size={18} className="text-green-600" />{" "}
              <strong>Participants:</strong> {challengeData.participants}
            </p>
          </div>

          <p className="bg-gray-100 p-3 rounded-lg inline-block text-gray-900 font-medium">
            Impact Metric: {challengeData.impactMetric}
          </p>
          <button
            className="btn bg-base-300 block hover:opacity-70 hover:scale-110 transition duration-75"
            onClick={() => handleJoinChallenge(challengeData._id)}
          >
            Join Challenge
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChallengeDetails;
