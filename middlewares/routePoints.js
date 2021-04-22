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

    if (!routeExists) {
        return res.json({ msg: "The routeId doesn't exist." }); 
    }

    if (!pointExists) {
        return res.json({ msg: "pointId doesn't exist."});
    }

    Route_points.create({
        routeId,
        pointId,
    })
        .then((routePoints) => res.json({ routePoints }))
        .catch((err) => {
             console.log(err);
             res.json({
                 msg: "Error occured while saving route point.",
             });
        });
};

//Update a route point
exports.updateRoutePoints = async (req, res) => {
    const { id, routeId, pointId } = req.body;

    let routePointsObject = await Route_points.findOne({ where: { id }});

    if (routePointsObject) {
        Route_points.update(
            {
                routeId,
                pointId,
            },
            {
                where: {
                    id,
                },
            }
        )
            .then((data) => res.json({ msg: "Route point updated."}))
            .catch((err) => {
                console.log(err);
                res.json({
                    msg: 
                        "Error occured while updating route point."
                });
            });
    } else {
            res.json({ msg: "Invalid route point ID."});
    }
};

//Delete a route point

exports.deleteRoutePoint = async (req, res) => {
    const { id } = req.body;

    let routePointsObject = await Route_points.findOne({ where: { id }});

    if (routePointsObject) {
        Route_points.destroy({
            where: {
                id,
            },
        })
            .then((data) => res.json({ msg: "Route point deleted."}))
            .catch((err) => {
                console.log(err);
                res.json({
                    msg: "Error occured while deleting route point."
                });
            });
    } else {
        res.json({ msg: "Invalid route point ID. "});
    }
};