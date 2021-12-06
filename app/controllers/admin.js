import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");
export default {
  async create(username, password) {
    // Check for an existing user in the db
    const existingUser = await admin.findOne({ username });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // if not,
    // encrypt or Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    return admin.insertOne({ username, password: hashedPassword });
  },

  // login method
  async login(username, password) {
    // find the user by username
    const user = await admin.findOne({ username });

    if (!user) {
      throw new Error("Unable to login");
    }

    // check if the password is correct
    // compare the password with the hashed password
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new Error("Unable to login");
    }

    // generate and return a JWT to be used for future requests by the user
    return jwt.sign({ username }, config.encryption.secret, {
      expiresIn: config.encryption.expiresIn,
    });
  },
};
