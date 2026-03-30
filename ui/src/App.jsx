import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Doctors from "./pages//doctors";
import Login from "./pages/loginPage";
import Signup from "./pages/signup";
import Appointment from "./pages/appointment";
import Navbar from "./components/Nevbar";
import Booking from "./components/Booking";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
