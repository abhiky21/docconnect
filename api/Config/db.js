import { Sequelize } from "sequelize";

const sequelize = new Sequelize("docconnect", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
