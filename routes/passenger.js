const express = require("express");
const router = express.Router();

const { verifyToken } = require("../middlewares/helpers/tokenVerify");

//importing passenger middlewares
const passengerMiddlewares = require("../middlewares/passenger");

//Get all passengers
router.get("/", passengerMiddlewares.getPassengers);

//Create a passenger
router.post(
    "/create",
    passengerMiddlewares.createPassenger
);
//Login passenger
router.post("/login", passengerMiddlewares.login);

//Search route
router.post("/search-route", passengerMiddlewares.searchRoute);


module.exports = router;