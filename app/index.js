// Entry point for the application
import express from "express";
import config from "./config.js";
import router from "./router/index.js";
// TODO: Import the routes

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

// Use json middleware (if needed)

app.use(express.json());

//  Mount the routes (maybe 🤔 /api)

app.use("/api", router);

app.listen(config.port, () => {
  console.log(`Server 🏃🏾‍♂️ at: ${config.baseURL}:${config.port}`);
});
