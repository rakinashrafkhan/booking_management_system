const express = require("express");
const router = express.Router();

//importing route middlewares
const routeMiddlewares = require("../middlewares/route");

//Get all routes
router.get("/", routeMiddlewares.getAllRoutes);

//Create a bus
router.post(
    "/create",
    routeMiddlewares.createRoute
);


module.exports = router;