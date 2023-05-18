const { validationResult } = require("express-validator");
exports.validationHandler = (req, res, next) => {
    const result = validationResult(req).array();
    if (result.length > 0) {
        res.status(422).json(result);
    } else {
        next();
    }
};