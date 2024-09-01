const { Router } = require("express");
const userRoute = Router();
const postUserHandler = require("../handlers/user/postUserHandler");
const getAllUsers = require("../handlers/user/getUsers");
userRoute.post("/", postUserHandler);
userRoute.get("/", getAllUsers);

module.exports = userRoute;
