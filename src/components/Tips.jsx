import React, { useEffect, useState } from "react";

const Tips = () => {
  const [tips, setTips] = useState([]);
  useEffect(() => {
    fetch("/tips.json")
      .then((res) => res.json())
      .then((data) => {
        setTips([...data.slice(0, 6)]);
      });
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-bold text-3xl md:text-4xl">Recent tips</h2>
      <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition border border-gray-200 p-5 flex flex-col"
          >
            <h2 className="text-lg font-semibold text-green-700 mb-1">
              {tip.title}
            </h2>

            <p className="text-sm text-gray-500 mb-1">By {tip.authorName}</p>
            <p className="text-xs text-gray-400 mb-3">
              {formatDate(tip.createdAt)}
            </p>

            <p className="text-gray-800 text-sm mb-4 line-clamp-2">
              {tip.content}
            </p>

            <div className="mt-auto flex justify-end items-center pt-2">
              <span className="text-green-600 font-semibold">
                ⬆️ {tip.upvotes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
