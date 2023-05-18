const { check} = require("express-validator");
exports.feedValidator = [
    check('caption').trim().not().isEmpty().isEmail().withMessage("Invalid email address"),
    check('imgurl').trim().not().isEmpty().withMessage("Invalid password it should be between 6 and 18 characters"),
];
exports.commentValidator = [
    check('comment').trim().not().isEmpty().withMessage("Invalid password it should be between 6 and 18 characters"),
];