import config from "../config.js";

export default class User {
  constructor({ name, email, password }) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.role = config.role.USER;
    this.createdAt = new Date();
  }

  // validate method to check the input data.
  validate() {
    const errors = [];

    if (!this.email) {
      errors.push("Username is required");
    }

    if (!this.password) {
      errors.push("Password is required");
    }

    return errors;
  }
}
