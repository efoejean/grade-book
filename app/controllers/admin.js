import config from "../config.js";
import client from "../client.js";
import bcrypt from "bcrypt";

const admin = client.db(config.db.name).collection("admin");
export default {
  async create(username, password) {
    // Check for an existing user in the db
    const existingUser = await admin.findOne({ username });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // encrypt or Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    console.log(username, password, "from admin controller");
  },
};
