import React, { useEffect, useState } from "react";
import { Calendar, MapPin } from "lucide-react";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};
const UpcomingEvents = () => {
  const [upcoming, setUpcoming] = useState([]);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        data = data
          .sort((a, b) => new Date(a.date) - new Date(b.date))
          .slice(0, 4);
        setUpcoming([...data]);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className=" text-3xl md:text-4xl font-bold">Active Challenges</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {upcoming.map((event, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-5 rounded-2xl border border-gray-200 hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {event.title}
            </h3>

            <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
              <Calendar size={16} />
              {formatDate(event.date)}
            </div>

            <div className="flex items-center gap-2 text-gray-700 text-sm mb-3">
              <MapPin size={16} />
              {event.location}
            </div>

            <p className="text-gray-600 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
