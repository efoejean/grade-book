import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("users");
export default {
  async create({ name, email, password, role, createdAt }) {
    // Check for an existing user in the db
    const existingUser = await admin.findOne({ email });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // if not,
    // encrypt or Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    return admin.insertOne({
      name,
      email,
      password: hashedPassword,
      role,
      createdAt,
    });
  },

  // login method
  async login({ email, password }) {
    // find the user by username
    const user = await admin.findOne({ email });

    if (!user) {
      throw new Error("Unable to login! try again or create an account");
    }

    // check if the password is correct
    // compare the password with the hashed password
    const passwordValid = await bcrypt.compare(password, user.password);

    if (!passwordValid) {
      throw new Error("Unable to login ! try again or create an account");
    }

    // generate and return a JWT to be used for future requests by the user
    return jwt.sign({ email, role: user.role }, config.encryption.secret, {
      expiresIn: config.encryption.expiresIn,
    });
  },
};
