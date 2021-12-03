import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();
router.get("/", (req, res) => {
  res.send("Admin");
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    adminController.create(username, password);
    res.send({ message: "Register" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
export default router;
