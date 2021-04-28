const { Route_point, 
        Route, 
        Point, sequelize } = require("../models");

//Get all route points
exports.getRoutePoints = (req, res) => {
    Route_point.findAll().then((routePoints) =>
    res.json({ routePoints })
    );
};

//Create a route point
exports.createRoutePoint = async (req, res) => {
    const { routeId, pointId } = req.body;

    if(!routeId || !pointId) {
        return res.json({ msg: "Enter both routeId & pointId."});
    }

    let exists = await Route_point.findOne({
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

    Route_point.create({
        routeId,
        pointId,
    })
        .then((routePoints) => res.json({ routePoints}))
        .catch((err) => {
             console.log(err);
             res.json({
                 msg: "Error occured while saving route point.",
             });
        });
};

//Update a route point
exports.updateRoutePoint = async (req, res) => {
    const { id, routeId, pointId } = req.body;

    let routePointObject = await Route_point.findOne({ where: { id }});

    if (routePointObject) {
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

    let routePointObject = await Route_point.findOne({ where: { id }});

    if (routePointObject) {
        Route_point.destroy({
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