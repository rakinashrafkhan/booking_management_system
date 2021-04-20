const express = require("express");
const router = express.Router();

//importing bus middlewares
const busMiddlewares = require("../middlewares/bus");

//Get all buses
router.get("/", busMiddlewares.getAllBuses);

//Create a bus
router.post(
    "/create",
    busMiddlewares.createBus
);


module.exports = router;