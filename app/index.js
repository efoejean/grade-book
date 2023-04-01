// Entry point for the application
import cors from "cors";
import express from "express";
import config from "./config.js";
import isAuth from "./middleware/isAuth.js";
import router from "./router/index.js";
// TODO: Import the routes

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

// Use json middleware (if needed)
app.use(cors());
app.use(express.json());
app.use(isAuth);
//  Mount the routes (maybe 🤔 /api)
app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: ${config.baseURL}:${config.port}`);
});
