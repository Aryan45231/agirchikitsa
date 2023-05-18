const express = require("express"),
  userController = require("../../controllers/userController"),
  router = express.Router();

router.get("/", userController.findAll);
router.patch("/:id", userController.toggleVisibility);
router.delete("/:id", userController.softDelete);

module.exports = router;