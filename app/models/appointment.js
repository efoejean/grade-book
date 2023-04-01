/* eslint-disable camelcase */
export default class Appointments {
  constructor({
    appointment_date,
    deposit,
    price,
    service,
    clientName,
    clientPhoneNumber,
    stylistName,
  }) {
    this.appointment_date = appointment_date;
    this.deposit = deposit;
    this.price = price;
    this.service = service;
    this.clientName = clientName;
    this.clientPhoneNumber = clientPhoneNumber;
    this.stylistName = stylistName;
    this.status = "Scheduled";
    this.created_at = new Date();
  }

  validate() {
    const errors = [];

    if (!this.appointment_date) {
      errors.push("Appointment date is required");
    }

    if (!this.deposit) {
      errors.push("Deposit is required");
    }

    if (!this.price) {
      errors.push("Price is required");
    }

    if (!this.service) {
      errors.push("Service is required");
    }

    if (!this.clientName) {
      errors.push("Client name is required");
    }

    if (!this.clientPhoneNumber) {
      errors.push("Client phone number is required");
    }

    if (!this.stylistName) {
      errors.push("Stylist name is required");
    }

    return errors;
  }
}
