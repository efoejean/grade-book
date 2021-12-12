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

// get one student using a dynamic route using student id, and destructure the req. we use post because we are send token for verification.
router.post("/:id", async ({ isAuth, params }, res) => {
  if (isAuth.role === "ADMIN") {
    try {
      const update = await stuController.show(params.id);
      res.json(update);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ message: "Access denied" });
  }
});

// update students grades,  use a dynamic route using student id and body
router.put("/grade/:id", async (req, res) => {
  if (req.isAuth?.role === "ADMIN") {
    try {
      const update = await stuController.update(req.params.id, req.body);
      res.status(200).json(update);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(401).json({ message: "Access denied" });
  }
});

export default router;
