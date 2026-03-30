import Appointment from "../models/Appointment.js";

export const bookAppointment = async (req, res) => {
  const { userId, doctorId, date, time } = req.body;

  const appointment = await Appointment.create({
    userId,
    doctorId,
    date,
    time,
  });

  res.json(appointment);
};
