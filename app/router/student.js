import { Router } from "express";
import stuController from "../controllers/student.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("student");
});

router.post("/", async (req, res) => {
  if (req.isAuth) {
    const allStudent = await stuController.index();
    res.json(allStudent);
  } else {
    res.status(404).json({ message: "Access denied" });
  }
});
export default router;
