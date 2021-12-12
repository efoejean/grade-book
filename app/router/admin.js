import { Router } from "express";
import adminController from "../controllers/admin.js";
import Admin from "../models/admin.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("Admin");
});

router.post("/register", async (req, res) => {
  try {
    // create new admin
    const admin = new Admin(req.body);

    // validate admin using the validate method from in Admin model
    const errors = await admin.validate();

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    await adminController.create(admin);

    // Use the login method in the adminController to login the user
    const token = await adminController.login(admin);
    res.send(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// login route
router.post("/login", async (req, res) => {
  try {
    const token = await adminController.login(req.body);
    res.status(200).json(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
