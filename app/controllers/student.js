import client from "../client.js";
import config from "../config.js";

const stu = client.db(config.db.name).collection("students");

export default {
  index() {
    return stu.find().toArray();
  },
};
