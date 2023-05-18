require("dotenv").config();
const express = require("express"),
  port = process.env.port || 1010,
  path = require("path"),
  http = require("http"),
  mongoose = require("mongoose"),
  cors = require("cors"),
  authRoutes = require("./routes/authRoutes"),
  userRoutes = require("./routes/userRoutes"),
  uploadFileRoute = require("./routes/fileUploadRoutes"),
  errorHandler = require("./middlewares/errorHandler"),
  authenticate = require("./middlewares/authenticate"),
  feedRoutes = require("./routes/feedRoutes"),
  privateRoute = require("./middlewares/privateRoute"),
  adminRoutes = require("./routes/adminRoutes")
config = require("./config"),
  app = express();

mongoose.Promise = global.Promise;
mongoose.connect(config.dbUriLocal, {
  useNewUrlParser: true,
});

app.use(cors());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(express.static(path.join(__dirname, "public")));
const server = http.createServer(app);
module.exports = server;
require("./socket.io/index");
app.use("/api/v1/auth", authRoutes);
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

app.use("/api/v1/feed", 
authenticate,
 privateRoute([
  "SuperAdmin",
  "Admin",
  "User",
]),
  feedRoutes)

app.use("/api/u1/admin",
 authenticate,
  privateRoute([
  "SuperAdmin",
  "Admin"
]),
  adminRoutes)
app.use("/api/v1/upload", uploadFileRoute);
app.use(errorHandler);
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});
server.listen(port, () => console.log(`listening on ${port}`));
