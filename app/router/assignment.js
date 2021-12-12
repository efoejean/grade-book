import { Router } from "express";
import AssignmentController from "../controllers/assignment.js";
import Assignment from "../models/assignment.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("assignment");
});

router.post("/", async (req, res) => {
  try {
    if (req.isAuth) {
      const assignment = new Assignment(req.body); // use the constructor to create a new instance of the model

      const errors = await assignment.validate(); // validate the model use the model's validate method

      if (errors.length) {
        throw new Error(errors.join("\n"));
      }

      const createAssignment = await AssignmentController.create(req.body);

      res.status(201).json(createAssignment);
    } else {
      throw new Error("You are not authorized to perform this action");
    }
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});
export default router;
