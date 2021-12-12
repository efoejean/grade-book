import User from "./User.js";

export default class Admin extends User {
  // export default class Admin extends User
  constructor({ username, password }) {
    super({ username, password });
    this.role = "ADMIN";
  }

  // validate method to check the input data.
  validate() {
    const errors = [];

    if (!this.username) {
      errors.push("Username is required");
    }

    if (!this.password) {
      errors.push("Password is required");
    }

    return errors;
  }
}
