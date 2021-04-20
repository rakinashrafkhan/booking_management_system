const express = require("express");
const router = express.Router();

//importing passenger middlewares
const passengerMiddlewares = require("../middlewares/passenger");

//Get all passengers
router.get("/", passengerMiddlewares.getAllPassengers);

//Create a passenger
router.post(
    "/create",
    passengerMiddlewares.createPassenger
);


module.exports = router;