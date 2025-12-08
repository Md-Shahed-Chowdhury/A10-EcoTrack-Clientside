import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/UseAxios";
import { Calendar, Target, Users, Clock, Tag } from "lucide-react";
import { toast } from "react-toastify";

const MyActivitiesDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const [activity, setActivity] = useState(null);

  useEffect(() => {
    axiosInstance.get(`/my-activities/${id}`).then((res) => {
      if (res.data && res.data.length > 0) {
        setActivity(res.data[0]); 
      }
    });
  }, [axiosInstance, id]);

  if (!activity) {
    return <div className="text-center p-10 text-gray-600">Loading...</div>;
  }

  const challenge = activity.challenge;
  const handleStatus =(id,status) =>{
    console.log("status clicked");
    const body = {status}
    axiosInstance.patch(`/my-activities/${id}`,body).then(data=>{
        console.log(data.data);
        if(data.data.modifiedCount>0)
        {
            toast.success(`status updated to ${status} successfully`);
        }
        setActivity({...activity,status:status})
    })
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">
        My Activity Details
      </h1>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="w-full md:w-1/2 h-72 rounded-xl overflow-hidden shadow-md">
          <img
            src={challenge.imageUrl}
            alt={challenge.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">
            {challenge.title}
          </h2>

          <p className="text-green-600 font-semibold flex items-center gap-2">
            <Tag size={16} /> {challenge.category}
          </p>

          <p className="text-gray-700">
            {challenge.description}
          </p>

          <div className="space-y-2 text-gray-700">
            <p className="flex gap-2 items-center">
              <Target size={18} className="text-green-600" />
              <strong>Target:</strong> {challenge.target}
            </p>

            <p className="flex gap-2 items-center">
              <Clock size={18} className="text-green-600" />
              <strong>Duration:</strong> {challenge.duration} days
            </p>

            <p className="flex gap-2 items-center">
              <Users size={18} className="text-green-600" />
              <strong>Participants:</strong> {challenge.participants}
            </p>

            <p className="flex gap-2 items-center bg-gray-100 p-2 rounded-lg">
              <strong>Impact Metric:</strong> {challenge.impactMetric}
            </p>
          </div>

          {/* Activity Info */}
          <div className="mt-6 p-4 bg-green-50 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Your Progress
            </h3>

            <p><strong>User ID:</strong> {activity.userId}</p>
            <p><strong>Status:</strong> {activity.status}</p>
            <p><strong>Progress:</strong> {activity.progress}%</p>
            <p><strong>Join Date:</strong> {activity.joinDate}</p>
          </div>
          <div className="space-x-5">
            <button onClick={()=>{handleStatus(activity._id,"Ongoing")}} className="btn hover:scale-110 transition duration-75 bg-yellow-500 ">Ongoing</button>
          <button onClick={()=>{handleStatus(activity._id,"Finished")}} className="btn hover:scale-110 transition duration-75 bg-green-500 ">Finished</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyActivitiesDetails;
