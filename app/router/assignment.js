import { Router } from "express";
import AssignmentController from "../controllers/assignment.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("assignment");
});

router.post("/", async (req, res) => {
  if (req.isAuth) {
    const createAssignment = await AssignmentController.create(req.body);
    res.status(201).json(createAssignment);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});
export default router;
