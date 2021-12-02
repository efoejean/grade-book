import { Router } from "express";
import AdminRouter from "./admin.js";
import student from "./student.js";
const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World");
});

router.use("/admin", AdminRouter);
router.use("/student", student);

export default router;
