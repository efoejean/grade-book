import { Router } from "express";
import AdminRouter from "./admin.js";
import assign from "./assignment.js";
import student from "./student.js";
const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World api");
});

router.use("/admin", AdminRouter);
router.use("/student", student);
router.use("/assignment", assign);

export default router;
