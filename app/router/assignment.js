import { Router } from "express";
import AssignmentController from "../controllers/assignment.js";
import Assignment from "../models/assignment.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("assignment");
});

router.post("/", async (req, res) => {
  try {
    if (req.isAuth?.role === "admin") {
      const assignment = new Assignment(req.body); // use the constructor to create a new instance of the model

      const errors = await assignment.validate(); // validate the model use the model's validate method

      if (errors.length) {
        throw new Error(errors.join("\n"));
      }

      const createAssignment = await AssignmentController.create(req.body);

      res.status(201).json(createAssignment);
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});
export default router;
