const express = require("express"),
  checkListController = require("../../controllers/checkListController"),
  {
    checkListValidator,
  } = require("../../middlewares/validations/checkListValidation"),
  {
    validationHandler,
  } = require("../../middlewares/validations/validationHandler"),
  router = express.Router();

router.get("/", checkListController.find);
router.post(
  "/",
  checkListValidator,
  validationHandler,
  checkListController.create
);

module.exports = router;
