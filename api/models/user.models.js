import { DataTypes } from "sequelize";
import sequelize from "../Config/db.js";

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
});

export default User;
