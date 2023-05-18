const { check} = require("express-validator");

exports.checkListValidator = [
    check('category').trim().not().isEmpty().withMessage("Category is required!"),
    check('isHaveSubCategory').trim().not().isEmpty().withMessage("isHaveSubCategory is required!"),
];
