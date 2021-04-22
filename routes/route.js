const express = require("express");
const router = express.Router();

//importing route middlewares
const routeMiddlewares = require("../middlewares/route");

//Get all routes
router.get("/", routeMiddlewares.getRoutes);

//Create a bus
router.post(
    "/create",
    routeMiddlewares.createRoute
);

// Update a route
// router.put("/update", routeMiddlewares.updateRoute);

// // Delete a route
// router.delete("/delete", routeMiddlewares.deleteRoute);


module.exports = router;