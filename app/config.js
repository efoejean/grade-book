import dotenv from "dotenv";

dotenv.config();

export default {
  baseURL: process.env.BASE_URL || "http://localhost:3000",

  db: {
    name: "gradeBookDB",
    url: process.env.MONGO_DB_URL,
  },

  port: process.env.PORT || 3000,
};
