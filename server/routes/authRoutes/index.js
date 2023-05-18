const express = require("express"),
  authController = require("../../controllers/authController"),
  authenticate = require("../../middlewares/authenticate"),
  {
    logInValidator,
    signUpValidator,
  } = require("../../middlewares/validations/authValidation"),
  {
    validationHandler,
  } = require("../../middlewares/validations/validationHandler"),
  router = express.Router();

router.post("/login", logInValidator, validationHandler, authController.login);
router.post(
  "/signup",
  signUpValidator,
  validationHandler,
  authController.signup
);
router.patch("/update/:id", authController.updateProfile);
router.get("/me", authenticate, authController.me);
router.get("/me/:employeeid/roles/:roles", authController.findByEmployeeId);

module.exports = router;

