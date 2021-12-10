import client from "../client.js";
import config from "../config.js";

const Assign = client.db(config.db.name).collection("assignments");

export default {
  async create(newAssignment) {
    const result = await Assign.insertOne(newAssignment);
    return result;
  },
};
