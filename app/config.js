import dotenv from "dotenv";

dotenv.config();

export default {
  baseURL: process.env.BASE_URL || "http://localhost:3000",
  db: {
    URL: process.env.MONGO_DB_URL,
    name: "gradeBooksDB",
    collection: "students",
  },

  port: process.env.PORT || 3000,
};
