export default class Assignment {
  constructor({ title, minimumPoint }) {
    this.title = title;
    this.minimumPoint = minimumPoint;
  }

  validate() {
    const errors = []; // array of errors
    if (!this.title) {
      errors.push("Title is required");
    }

    if (!this.minimumPoint) {
      errors.push("Minimum point is required");
    }

    if (this.minimumPoint < 0) {
      errors.push("Minimum point must be greater than 0");
    }

    return errors;
  }
}
