import React from "react";
import useAxios from "../hooks/axios";
import { toast } from "react-toastify";


const AddChallenge = () => {
  const axiosInstance = useAxios();
  const handleChallengeInsert = (e) => {
  const form = e.target;
  e.preventDefault();
  const title = form.title.value;
  const category = form.category.value;
  const description = form.description.value;
  const duration = form.duration.value;
  const target = form.target.value;
  const impactMetric = form.impactMetric.value;
  const createdBy = form.createdBy.value;
  const startDate = form.startDate.value;
  const endDate = form.endDate.value;
  const imageUrl = form.imageUrl.value;
  const newChallenge = {
    title,
    category,
    description,
    duration,
    target,
    impactMetric,
    createdBy,
    startDate,
    endDate,
    imageUrl,
    participants: 0,
  };
  axiosInstance.post('/challenges', newChallenge)
  .then(data=>{
    if(data.data.insertedId){
      toast.success('Challenge created successfully');
      form.reset();
    } 
  })
};

  return (
    <form
      onSubmit={handleChallengeInsert}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-2xl space-y-4 mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Create New Challenge
      </h2>

      <input
        type="text"
        name="title"
        placeholder="Title"
        className="w-full p-3 border rounded-lg"
        required
      />

      <select name="category" className="w-full p-3 border rounded-lg" required>
        <option value="">Select Category</option>
        <option value="Waste Reduction">Waste Reduction</option>
        <option value="Energy Conservation">Energy Conservation</option>
        <option value="Water Conservation">Water Conservation</option>
        <option value="Sustainable Transport">Sustainable Transport</option>
        <option value="Green Living">Green Living</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="number"
        name="duration"
        placeholder="Duration (days)"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="text"
        name="target"
        placeholder="Target"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="text"
        name="impactMetric"
        placeholder="Impact Metric"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="email"
        name="createdBy"
        placeholder="Created By (Email)"
        className="w-full p-3 border rounded-lg"
        required
      />
      <label>Start Date</label>
      <input
        type="date"
        name="startDate"
        className="w-full p-3 border rounded-lg"
        required
      />
      <label>End Date</label>
      <input
        type="date"
        name="endDate"
        className="w-full p-3 border rounded-lg"
        required
      />

      <input
        type="url"
        name="imageUrl"
        placeholder="Image URL"
        className="w-full p-3 border rounded-lg"
        required
      />

      <button
        type="submit"
        className="w-full p-3 bg-base-300 text-white rounded-lg font-semibold hover:bg-green-600 transition"
      >
        Create Challenge
      </button>
    </form>
  );
};

export default AddChallenge;
