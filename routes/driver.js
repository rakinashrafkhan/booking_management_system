const express = require("express");
const router = express.Router();

//importing driver middlewares
const driverMiddlewares = require("../middlewares/driver");

//Get all passengers
router.get("/", driverMiddlewares.getAllDrivers);

//Create a passenger
router.post(
    "/create",
    driverMiddlewares.createDriver
);


module.exports = router;