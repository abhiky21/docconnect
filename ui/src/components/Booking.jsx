import React from "react";
import zustand from "../store/zustand";

function Booking() {
  const { doctor } = zustand();

  if (!doctor) {
    return <div>No doctor selected</div>;
  }

  return (
    <div>
      <h1>Booking</h1>
      <div className="flex gap-10">
        <div className="w-[300px] rounded-2xl h-[200px]">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border border-gray-500 w-full mr-6 px-6 py-4">
          <div className="text-4xl font-bold">{doctor.name}</div>
          <div className="text-xl pl-4 py-2 text-gray-700">
            {doctor.specialization}
          </div>
          <div className="flex gap-6">
            <div className="text-xl font-bold bg-yellow-300 text-center px-2">
              {doctor.charge}
            </div>
            <button className="bg-blue-800 px-4 py-2 rounded-4xl text-white font-bold cursor-pointer active:outline-2 active:outline-blue-700 ">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
