import { Router } from "express";
import userController from "../controllers/user.js";
import User from "../models/User.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("user");
});

router.post("/register", async (req, res) => {
  try {
    // create new admin
    const user = new User(req.body);

    // validate admin using the validate method from in Admin model
    const errors = await user.validate();

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    await userController.create(user);

    // Use the login method in the adminController to login the user
    const token = await userController.login(user);
    res.send(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const token = await userController.login(req.body);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
