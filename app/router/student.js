import { Router } from "express";
import stuController from "../controllers/student.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("student");
});

router.post("/", async (req, res) => {
  // use isAuth and role is Admin to check if user is admin to access this route
  if (req.isAuth?.role === "ADMIN") {
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

// dynamic route using student id and body
router.post("/grade/:id", async (req, res) => {
  if (req.isAuth?.role === "ADMIN") {
    try {
      const update = await stuController.update(req.params.id, req.body);
      res.json(update);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});
export default router;
