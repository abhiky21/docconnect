import React from "react";

function Profile() {
  const user = {
    name: "User",
    email: "user@example.com",
    phone: "+91 9876543210",
    age: 22,
    gender: "Male",
    address: "Delhi, India",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  };

  function handleProfile() {
    alert("Coming Soon");
  }

  return (
    <div className=" min-h-screen p-6 flex justify-center">
      <div className=" shadow-lg rounded-2xl w-full max-w-3xl p-6">
        {/* Profile Top */}
        <div className="flex flex-col items-center text-center">
          <img
            src={user.image}
            alt={user.name}
            className="w-28 h-28 rounded-full object-cover mb-4"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <p className="text-gray-500">{user.email}</p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t"></div>

        {/* Details */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>

          <div>
            <p className="text-gray-500">Age</p>
            <p className="font-medium">{user.age}</p>
          </div>

          <div>
            <p className="text-gray-500">Gender</p>
            <p className="font-medium">{user.gender}</p>
          </div>

          <div>
            <p className="text-gray-500">Address</p>
            <p className="font-medium">{user.address}</p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handleProfile}
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold
                             hover:bg-blue-700 transition cursor-pointer"
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
