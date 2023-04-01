/* eslint-disable camelcase */
import { ObjectId as objectId } from "mongodb";
import client from "../client.js";
import config from "../config.js";

const Appoint = client.db(config.db.name).collection("appointments");

export default {
  async create({
    appointment_date,
    deposit,
    price,
    service,
    clientName,
    clientPhoneNumber,
    stylistName,
  }) {
    const { insertedId } = await Appoint.insertOne({
      appointment_date,
      deposit,
      price,
      service,
      clientName,
      clientPhoneNumber,
      stylistName,
      status: "Scheduled",
      created_at: new Date(),
    });
    return { insertedId };
  },

  async index() {
    return Appoint.find().toArray();
  },

  async show(id) {
    return Appoint.findOne({ _id: objectId(id) });
  },
};
