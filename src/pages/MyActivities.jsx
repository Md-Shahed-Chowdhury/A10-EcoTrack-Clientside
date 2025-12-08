import React, { useEffect } from 'react';
import useAxios from '../hooks/UseAxios';
import { useNavigate } from 'react-router';

const MyActivities = () => {
    const [myActivities, setMyActivities] = React.useState([]);
    const axiosInstance = useAxios();
    const navigate = useNavigate();
    useEffect(()=>{
        
        axiosInstance.get("/my-activities").then(data=>{
            setMyActivities([...data.data]);
        })
    },[axiosInstance])
    console.log(myActivities);
    const handleViewProgress = (id)=>{
        navigate(`/my-activities/${id}`);
    }
    return (
        <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
      <h2 className=" text-3xl md:text-4xl font-bold">My Activities</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {myActivities.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 overflow-hidden"
          >
            <img
              src={item.challenge.imageUrl}
              alt={item.challenge.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{item.challenge.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{item.challenge.category}</p>
              <p className="text-green-600 font-semibold">
                Impact: {item.challenge.impactMetric}
              </p>
            </div>
            <button onClick={()=>{handleViewProgress(item._id)}}
              
              className="btn bg-base-300 hover:scale-110 ml-5 mb-5 transition duration-100"
            >
              View progress
            </button>
          </div>
        ))}
      </div>
      
    </div>
    );
};

export default MyActivities;