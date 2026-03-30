import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-20 px-6 ">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">MedCare</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mb-6">
          Book appointments with trusted doctors anytime, anywhere. Fast, simple
          and reliable healthcare at your fingertips.
        </p>

        <Link
          to="/doctors"
          className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold
                     hover:bg-blue-700 transition duration-300"
        >
          Find Doctors
        </Link>
      </div>

      {/* Features Section */}
      <div className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us?</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-500">
              Book your appointment in just a few clicks without any hassle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Verified Doctors</h3>
            <p className="text-gray-500">
              All doctors are verified professionals with trusted experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-500">
              Get help anytime with our dedicated support team.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Book Your Appointment?
        </h2>
        <Link
          to="/doctors"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold
                     hover:bg-gray-100 transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
