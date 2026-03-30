import { useState } from "react";
import api from "../api/api";

export default function Appointment() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const book = async () => {
    await api.post("/appointment", {
      userId: 1,
      doctorId: 1,
      date,
      time,
    });
  };

  return (
    <div className="p-6">
      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <input type="time" onChange={(e) => setTime(e.target.value)} />
      <button onClick={book}>Book Appointment</button>
    </div>
  );
}
