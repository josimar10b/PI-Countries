const express = require("express");
const getActivities = require("../controllers/getActivities");
const postActivities = require("../controllers/postActivities");
const deleteActivity = require("../controllers/deleteActivity");

const userRouter = express.Router();

userRouter.get("/", getActivities)
userRouter.post("/", postActivities)
userRouter.delete("/:id", deleteActivity)

module.exports ={ userRouter}