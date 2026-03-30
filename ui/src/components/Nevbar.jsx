import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">MedCare</h1>

        {/* Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-blue-600 transition">
              Doctors
            </Link>
          </li>
          <li>
            <Link to="/profile" className="hover:text-blue-600 transition">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
