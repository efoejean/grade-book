import { ObjectId as objectId } from "mongodb";
import client from "../client.js";
import config from "../config.js";

const stu = client.db(config.db.name).collection("students");

export default {
  index() {
    return stu.find().toArray();
  },

  // update grade by locating the student using dynamic id and updating the grade in body with  grade id.
  async update(id, grade) {
    const studentQuery = {
      _id: objectId(id),
      "grades._id": objectId(grade.id),
    };
    const updateGrade = {
      $set: { "grades.$.pointsEarned": grade.pointsEarned },
    };
    return stu.updateOne(studentQuery, updateGrade);
  },
};
