const express = require("express"),
  dailyAssignedController = require("../../controllers/dailyAssignedTaskController"),
  {
    assignedTaskValidator,
    updateAssignedTaskValidator,
  } = require("../../middlewares/validations/assignedTaskValidation"),
  {
    validationHandler,
  } = require("../../middlewares/validations/validationHandler"),
  router = express.Router();

router.get("/", dailyAssignedController.findAll);
router.get("/worker/:id", dailyAssignedController.findAssignedTaskByWorkerId);
router.post(
  "/",
  assignedTaskValidator,
  validationHandler,
  dailyAssignedController.create
);
router.patch(
  "/:id",
  updateAssignedTaskValidator,
  validationHandler,
  dailyAssignedController.updateAssignedTaskStatus
);

module.exports = router;
