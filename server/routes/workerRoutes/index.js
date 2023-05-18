const express = require("express"),
  workerController = require("../../controllers/workerController"),
  router = express.Router();

router.get("/", workerController.findAll);
router.post("/",  workerController.create)
router.get("/:id", workerController.findOne);
router.patch("/:id", workerController.updateOne);
router.delete("/:id", workerController.softDelete);

module.exports = router;