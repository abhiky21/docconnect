import express from "express";
import { signup, login } from "./auth.routes.js";
import { bookAppointment } from "../controllers/appointment.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/appointment", bookAppointment);

export default router;
