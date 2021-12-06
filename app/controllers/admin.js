import config from "../config.js";
import client from "../client.js";

const admin = client.db(config.db.name).collection("admin");
export default {
  async create(username, password) {
    // Check for an existing user in the db
    const existingUser = await admin.findOne({ username });
    if (existingUser) {
      throw new Error("User already exists");
    }
    console.log(username, password, "from admin controller");
  },
};
