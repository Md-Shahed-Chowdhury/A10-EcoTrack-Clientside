import React from "react";
import useAxios from "../hooks/UseAxios";
import { useParams } from "react-router";

const UpdateChallenge = () => {
    const axiosInstance = useAxios();
    const {id} = useParams();
    // console.log("Challenge ID to update:", id);
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedData = {
      title: form.title.value,
      description: form.description.value,
      category: form.category.value,
      duration: form.duration.value,
      target: form.target.value,
    };

    console.log("Updated Data:", updatedData);
    axiosInstance.patch(`/my-challenges/${id}`, updatedData).then((response) => {
      console.log("Update response:", response.data);
      
      form.reset();
    });

  };

  return (
    <div className="max-w-lg mx-auto p-6 shadow rounded bg-white">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Update Challenge</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Title */}
        <div>
          <label className="font-semibold">Title</label>
          <input
            name="title"
            type="text"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Description */}
        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            rows="3"
            required
            className="w-full border p-2 rounded"
          ></textarea>
        </div>

        {/* Category */}
        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Category</option>
            <option>Energy Conservation</option>
            <option>Water Conservation</option>
            <option>Waste Reduction</option>
            <option>Sustainable Transport</option>
            <option>Green Living</option>
          </select>
        </div>

        {/* Duration */}
        <div>
          <label className="font-semibold">Duration (days)</label>
          <input
            name="duration"
            type="number"
            required
            min="1"
            className="w-full border p-2 rounded"
          />
        </div>

        {/* Target */}
        <div>
          <label className="font-semibold">Target</label>
          <input
            name="target"
            type="text"
            required
            className="w-full border p-2 rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateChallenge;
