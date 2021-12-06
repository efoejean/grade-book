import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("Admin");
});

router.post("/register", async (req, res) => {
  try {
    // destructure the username and password from  req.body
    const { username, password } = req.body;
    await adminController.create(username, password);

    // Use the login method in the adminController to login the user
    const token = await adminController.login(username, password);
    res.send(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
