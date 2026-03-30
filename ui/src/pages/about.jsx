export default function About() {
  return (
    <div className=" min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-16 px-6 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          About <span className="text-blue-600">DocConnect</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Connecting patients with trusted doctors for easy and quick healthcare
          access.
        </p>
      </div>

      {/* Image + Text Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1582750433449-648ed127bb54"
          alt="doctor"
          className="rounded-2xl shadow-md w-full h-[300px] object-cover"
        />

        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At DocConnect, our mission is to make healthcare simple and
            accessible. We help patients find the right doctors and book
            appointments easily.
          </p>
          <p className="text-gray-600">
            Whether it's a general checkup or a specialist consultation, we aim
            to provide a smooth and reliable experience.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <div className="px-6 py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Easy Appointments</h3>
            <p className="text-gray-500">
              Book doctor appointments quickly with a few clicks.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Trusted Doctors</h3>
            <p className="text-gray-500">
              Verified professionals with years of experience.
            </p>
          </div>

          <div className="p-6 rounded-2xl shadow-md hover:shadow-lg transition bg-gray-50">
            <h3 className="text-xl font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-500">
              Your data and appointments are safe with us.
            </p>
          </div>
        </div>
      </div>

      {/* Extra Image Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center px-6 py-16">
        {/* Text */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-4">
            We focus on providing a seamless healthcare experience with modern
            technology.
          </p>
          <p className="text-gray-600">
            Our platform is designed to save your time and give you access to
            quality care anytime.
          </p>
        </div>

        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1576091160550-2173dba999ef"
          alt="hospital"
          className="rounded-2xl shadow-md w-full h-[300px] object-cover"
        />
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Health Journey Today
        </h2>
        <a
          href="/doctors"
          className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold
                     hover:bg-gray-100 transition"
        >
          Find Doctors
        </a>
      </div>
    </div>
  );
}
