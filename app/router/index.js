import { Router } from "express";
import AdminRouter from "./admin.js";
import appointment from "./appointment.js";
import assign from "./assignment.js";
import student from "./student.js";
import user from "./user.js";
const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World api");
});

router.use("/user", user);
router.use("/admin", AdminRouter);
router.use("/student", student);
router.use("/assignment", assign);
router.use("/appointment", appointment);

export default router;
