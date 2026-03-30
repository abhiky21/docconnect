import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Appointment = sequelize.define("Appointment", {
  date: DataTypes.DATEONLY,
  time: DataTypes.STRING,
});

User.hasMany(Appointment);
Doctor.hasMany(Appointment);
Appointment.belongsTo(User);
Appointment.belongsTo(Doctor);

export default Appointment;
