import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-blue-600 cursor-pointer">
          MedCare
        </Link>

        {/* Menu */}
        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${isActive ? "border-blue-600 border-b-2 " : "text-gray-800"}hover:text-blue-600 transition`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `${isActive ? "border-blue-600 border-b-2 " : "text-gray-800"}hover:text-blue-600 transition`
              }
            >
              Doctors
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${isActive ? "border-blue-600 border-b-2 " : "text-gray-800"}hover:text-blue-600 transition`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `${isActive ? "border-blue-600 border-b-2 " : "text-gray-800"}hover:text-blue-600 transition`
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
