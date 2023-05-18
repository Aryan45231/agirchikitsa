require("dotenv").config();
// Library dependencies
const express = require("express"),
  port = process.env.port || 1010,
  path = require("path"),
  http = require("http"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  
  // Routes
  authRoutes = require("./routes/authRoutes"),
  userRoutes = require("./routes/userRoutes"),
  adminRoutes = require("./routes/adminRoutes"),
  uploadFileRoute = require("./routes/fileUploadRoutes"),
  feedRoutes = require("./routes/feedRoutes"),

  // Middleware
  errorHandler = require("./middlewares/errorHandler"),
  authenticate = require("./middlewares/authenticate"),
  privateRoute = require("./middlewares/privateRoute"),

  config = require("./config"),
  app = express();
// database Configuration
mongoose.Promise = global.Promise;
mongoose.connect(config.dbUriLocal, {
  useNewUrlParser: true,
});
// Required Middlewares
app.use(cors());
app.use(express.json());
// Static Files
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.join(__dirname, "public")));

// socket.connect(server
const server = http.createServer(app);
module.exports = server;
require("./socket.io/index");

app.use("/api/v1/auth", authRoutes);

// UserRoutes
app.use(
  "/api/v1/users",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "User",
  ]),
  userRoutes
);

// Feed Routes
app.use("/api/v1/feed",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin",
    "User",
  ]),
  feedRoutes)

// Admin Routes
app.use("/api/u1/admin",
  authenticate,
  privateRoute([
    "SuperAdmin",
    "Admin"
  ]),
  adminRoutes)

// File Upload Routes
app.use("/api/v1/upload", uploadFileRoute);
// Error Handler Rout 
app.use(errorHandler);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
server.listen(port, () => console.log(`listening on ${port}`));
