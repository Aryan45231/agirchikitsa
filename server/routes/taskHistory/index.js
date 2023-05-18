const express = require("express"),
  taskHistoryController = require("../../controllers/taskHistory"),
  router = express.Router();

router.get("/", taskHistoryController.findTaskHistoryOfWorker);
router.get("/history", taskHistoryController.findTaskHistory);
router.post("/:id", taskHistoryController.createTaskHistory);

module.exports = router;
