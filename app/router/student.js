import { Router } from "express";
import stuController from "../controllers/student.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("student");
});

router.post("/", async (req, res) => {
  if (req.isAuth) {
    try {
      const allStudent = await stuController.index();
      res.json(allStudent);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ message: "Access denied" });
  }
});
export default router;
