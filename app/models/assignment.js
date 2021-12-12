export default class Assignment {
  constructor({ title, pointsPossible }) {
    this.title = title;
    this.pointsPossible = pointsPossible;
  }

  validate() {
    const errors = []; // array of errors
    if (!this.title) {
      errors.push("Title is required");
    }

    if (!this.pointsPossible) {
      errors.push("Minimum point is required");
    }

    if (this.pointsPossible < 0) {
      errors.push("Minimum point must be greater than 0");
    }

    return errors;
  }
}
