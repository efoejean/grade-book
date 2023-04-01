import dotenv from "dotenv";

dotenv.config();

export default {
  baseURL: process.env.BASE_URL || "http://localhost:3000",
  db: {
    URL: process.env.MONGO_DB_URL,
    name: process.env.DB_NAME,
  },

  encryption: {
    expiresIn: process.env.EXPIRES_IN || "2d",
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.ENCRYPTION_SECRET,
  },

  role: {
    ADMIN: process.env.ADMIN_ROLE,
    EMPLOYEE: process.env.EMPLOYEE_ROLE,
    USER: process.env.USER_ROLE,
  },

  port: process.env.PORT || 3000,
};
