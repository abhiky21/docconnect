import { useNavigate } from "react-router-dom";
import zustand from "../store/zustand";

const doctors = [
  {
    id: 1,
    name: "Dr. Sharma",
    specialization: "Cardiologist",
    charge: "₹500",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Khan",
    specialization: "Dermatologist",
    charge: "₹400",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Dr. Mehta",
    specialization: "Neurologist",
    charge: "₹700",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 4,
    name: "Dr. Singh",
    specialization: "Orthopedic",
    charge: "₹600",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    id: 5,
    name: "Dr. Gupta",
    specialization: "Pediatrician",
    charge: "₹450",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
  },
  {
    id: 6,
    name: "Dr. Verma",
    specialization: "ENT Specialist",
    charge: "₹350",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    id: 7,
    name: "Dr. Iyer",
    specialization: "Gynecologist",
    charge: "₹550",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 8,
    name: "Dr. Reddy",
    specialization: "Oncologist",
    charge: "₹800",
    image: "https://randomuser.me/api/portraits/men/60.jpg",
  },
  {
    id: 9,
    name: "Dr. Patel",
    specialization: "Psychiatrist",
    charge: "₹500",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 10,
    name: "Dr. Das",
    specialization: "General Physician",
    charge: "₹300",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

export default function Doctors() {
  const { setDoctor } = zustand();

  const navigate = useNavigate();
  const handleClick = (doc) => {
    setDoctor(doc);
    navigate(`/booking/${doc.id}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Doctors</h1>

      <div className="flex flex-wrap gap-6 justify-center">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => handleClick(doc)}
            className="w-[200px] h-[300px] bg-white rounded-2xl shadow-md 
                 overflow-hidden cursor-pointer
                 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Full width image */}
            <div className="w-full h-[200px]">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info */}
            <div className="p-3 text-center">
              <h2 className="text-md font-semibold">{doc.name}</h2>
              <p className="text-gray-500 text-sm">{doc.specialization}</p>
              <p className="text-blue-600 font-medium mt-2 text-sm">
                Booking: {doc.charge}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
