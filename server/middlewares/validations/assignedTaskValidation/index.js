const { check} = require("express-validator");

exports.assignedTaskValidator = [
    check('groupName').trim().not().isEmpty().withMessage("groupName is required!"),
    check('vehicleID').trim().not().isEmpty().withMessage("vehicleID is required!"),
    check('status').trim().not().isEmpty().withMessage("Invalid status"),
];
exports.updateAssignedTaskValidator = [
    check('status').trim().not().isEmpty().withMessage("status is required!"),
];