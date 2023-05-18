const express = require("express")
const app = express.Router()
const feedValidation = require("../../middlewares/validations/feedValidation")
const feedController = require("../../controllers/feedController")
app.post("/create",feedValidation.feedValidator, feedController.create)
app.patch("/toggleLike/feedId",feedController.toggleLike)
app.patch("/comment/:feedId",feedValidation.commentValidator, feedController.comment)
module.exports= app