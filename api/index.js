import express from "express";
import cors from "cors";
import sequelize from "./config/db.js";
import routes from "./routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", routes);

sequelize.sync();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
