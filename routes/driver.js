const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/helpers/tokenVerify");

//importing driver middlewares
const driverMiddlewares = require("../middlewares/driver");

//Get all passengers
router.get("/", driverMiddlewares.getDrivers);

//Create a passenger
router.post(
    "/create",
    driverMiddlewares.createDriver
);

//Login
router.post("/login", driverMiddlewares.login);

// Search all buses
router.get("/buses", driverMiddlewares.getBuses);

module.exports = router;