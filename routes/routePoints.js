const express = require("express");
const router = express.Router();

// Importing route point related middlewares
const routePointsMiddlewares = require("../middlewares/routePoints");

// Get all route points
router.get("/", routePointsMiddlewares.getRoutePoints);

// // Create a route point
// router.post("/create", routePointsMiddlewares.createRoutePoints);

// // Update a route point
// router.put("/update", routePointMiddlewares.updateRoutePoint);

// // Delete a route point
// router.delete("/delete", routePointMiddlewares.deleteRoutePoint);

module.exports = router;