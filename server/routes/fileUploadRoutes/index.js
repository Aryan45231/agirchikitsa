const express = require("express"),
  path = require("path"),
  fileUploadController = require("../../controllers/fileUploadController"),
  multer = require("multer"),
  router = express.Router(),
  storage = multer.diskStorage({
    destination: (req, file, cb) =>
      cb(null, path.join(__dirname, "../../public/uploads")),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
  upload = multer({ storage: storage });

router.post(
  "/",
  upload.single("image"),
  fileUploadController.uploadFile
);
module.exports = router;
