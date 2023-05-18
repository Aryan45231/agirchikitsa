const express = require("express")
const app = express.Router()
const feedController = require("../../controllers/feedController")
app.post("/postfeed", feedController.postFeed)
app.post("/like",feedController.like)
app.post("/comment", feedController.comment)
module.exports= app
