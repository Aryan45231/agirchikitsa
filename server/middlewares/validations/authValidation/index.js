const { check} = require("express-validator");

exports.logInValidator = [
    check('email').trim().not().isEmpty().isEmail().withMessage("Invalid email address"),
    check('password').trim().not().isEmpty().isLength({
        min: 6,
        max:18
    }).withMessage("Invalid password it should be between 6 and 18 characters"),
];

exports.signUpValidator = [
    check('name').trim().not().isEmpty().withMessage("Name is required!"),
    check('roles').trim().not().isEmpty().withMessage("Roles is required"),
    check('companyId').trim().not().isEmpty().withMessage("Company ID is required"),
];
