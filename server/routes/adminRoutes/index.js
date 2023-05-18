const express = require("express"),
 app = express.Router(),
 adminController = require("../../controllers/adminController/index")
app.delete("/deleteFeed" , adminController.deleteFeed )
app.post("/updateFeed", adminController.updatedFeed )
module.exports = app