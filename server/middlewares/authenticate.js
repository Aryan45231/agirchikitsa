const jwt = require("jsonwebtoken"),
  User = require("../models/user"),
  config = require("../config");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      const error = new Error("Invalid authorization header");
      error.statusCode = 401;
      throw error;
    }
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      const error = new Error("Token is required");
      error.statusCode = 401;
      throw error;
    }
    const decode = jwt.verify(token, config.jwtSecret);
    const user = await User.findById(decode.id);
    if (!user) {
      const error = new Error("Invalid Jwt token");
      error.statusCode = 401;
      throw error;
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
