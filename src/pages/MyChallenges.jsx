import { NavLink, useNavigate } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import useAxios from "../hooks/UseAxios";
import { toast } from "react-toastify";

const MyChallenges = () => {
  const axiosInstance = useAxios();
  const [myChallenges, setMyChallenges] = useState([]);
  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();
  //   const data = useLoaderData();
  //   const allChallenges = data.data;
  const handleViewChallenge = (id) => {
    console.log("View Challenge button clicked");
    navigate(`/challenges/${id}`);
  };
  const handleDeleteChallenge = (id) => {
    axiosInstance.delete(`/challenges/${id}`).then((data) => {
      console.log(data.data);
      if (data.data.deletedCount > 0) {
        toast.success("Challenge deleted successfully");
        setChanged(!changed);
      }
    });
  };

  useEffect(() => {
    axiosInstance.get("/myChallenges").then((data) => {
      setMyChallenges([...data.data]);
    });
  }, [axiosInstance, changed]);

  return (
    <div className="flex flex-col justify-center items-center mt-5 lg:mt-10">
      <h2 className=" text-3xl md:text-4xl font-bold">My Challenges</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {myChallenges.map((item, index) => (
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
            <button
              onClick={() => handleViewChallenge(item._id)}
              className="btn bg-base-300 hover:scale-110 ml-5 mb-5 transition duration-100"
            >
              View details
            </button>
            <NavLink to={`/updateChallenge/${item._id}`}>
              <button className="btn bg-yellow-500 hover:scale-110 ml-5 mb-5 transition duration-100">
                Update
              </button>
            </NavLink>

            <button
              onClick={() => handleDeleteChallenge(item._id)}
              className="btn bg-red-400 hover:scale-110 ml-5 mb-5 transition duration-100"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="btn bg-primary text-black hover:bg-base-300 ">
        <NavLink
          className={`flex  justify-center items-center gap-2`}
          to="/challenges/add"
        >
          Create New Challenge
          <FaArrowRight />
        </NavLink>
      </button>
    </div>
  );
};

export default MyChallenges;
