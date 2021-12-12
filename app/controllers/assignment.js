import client from "../client.js";
import config from "../config.js";

const Assign = client.db(config.db.name).collection("assignments");

export default {
  create(newAssignment) {
    return Assign.insertOne(newAssignment);
  },
};
