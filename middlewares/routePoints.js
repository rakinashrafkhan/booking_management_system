const { Route_points, 
        Route, 
        Point, sequelize } = require("../models");

//Get all route points
exports.createRoutePoints = (req, res) => {
    Route_points.findAll().then((routePoints) =>
    res.json({ routePoints })
    );
};

//Create a route point
exports.createRoutePoints = async (req, res) => {
    const { routeId, pointId } = req.body;

    if(!routeId || !pointId) {
        return res.json({ msg: "Enter both routeId & pointId."});
    }

    let exists = await Route_points.findOne({
        where: {
            routeId,
            pointId,
        },
    });

    if (exists) {
        return res.json({ msg: "Route point already exists."});
    }
    let routeExists = await Route.findOne({
        where: {
            id: routeId,
        },
    });

    let pointExists = await Point.findOne({
        where: {
            id: pointId,
        },
    });

    
}