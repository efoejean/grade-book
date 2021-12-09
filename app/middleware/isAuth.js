import jwt from "jsonwebtoken";
import config from "../config.js";

export default (req, res, next) => {
  try {
    req.isAuth = jwt.verify(
      req.headers.authorization.split(" ")[1],
      config.encryption.secret
    );
    next();
  } catch {
    req.isAuth = false;
    next();
  }
};
