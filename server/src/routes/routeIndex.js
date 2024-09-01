const userRoute = require("./userRoute");
const { Router } = require("express");
const router = Router();

router.use("/user", userRoute);

module.exports = router;
