const express = require("express");
const otpController = require("../controllers/otpController");

otpRouter = express.Router();

otpRouter.post("/signin", otpController.signinUser);
otpRouter.post("/verify", otpController.otpVerification);

module.exports = otpRouter;