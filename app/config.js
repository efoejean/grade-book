import dotenv from "dotenv";

dotenv.config();

export default {
  baseURL: process.env.BASE_URL || "http://localhost:3000",
  db: {
    URL: process.env.MONGO_DB_URL,
    name: "gradeBookDB",
  },

  encryption: {
    expiresIn: process.env.EXPIRES_IN || "2d",
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.ENCRYPTION_SECRET || "secret",
  },

  port: process.env.PORT || 3000,
};
