const {Route, Point, Route_points, sequelize} = require("../models");

//get all routes
exports.getRoutes = (req, res) => {
    Route.findAll().then(routes => res.json(routes));
};

 //create a route
 exports.createRoute = async (req, res) => {
     const {
        route_name,
        fare,
        pointsId
     } = req.body;
     
     console.log(pointsId)

     for (const pointId of pointsId) {
         if (typeof pointId != "number") {
             return res.json({ msg: "Enter valid points."});
         }

         let pointExits = await Point.findOne({ where: { id: pointId}});

         if(!pointExits) {
             return res.json({ msg: "Enter valid points."})
         }
     }

     let startPointObject = await Point.findOne({
         where: { id: pointsId[0] },
     });
     let startPoint = startPointObject.point_name;

     let endPointObject = await Point.findOne({
         where: { id: pointsId[pointsId.length - 1] },
     });

     let endPoint = endPointObject.point_name;

     console.log(startPoint);
     console.log(endPoint);

     if(
         fare === undefined ||
         fare.length === 0 ||
         !Number.isInteger(fare)
     ) {
         return res.json({
             msg: "Please enter correct fare.",
         });
     }

     let routeObject = await Route.create({
         route_name: startPoint + "-" + endPoint,
         fare: fare,
     });

     for (const pointId of pointsId) {
         let routePointObject = await Route_points.create({
             routeId: routeObject.id,
             pointId: pointId,
         });

         console.log(routePointObject);
     }

     res.json({ routeObject });

     console.log(routeObject.id);
         
    };

//Update a route
exports.updateRoute = async (req, res) => {
    const { id, fare } = req.body;

    if (
        fare === undefined ||
        fare.length === 0 ||
        !Number.isInteger(parseInt(fare))
    ) {
        return res.json({
            msg: "Please enter correct fare.",
        });
    }

    let routeObject = await Route.findOne({ where: { id }});

    if (routeObject) {
        Route.update(
            {
                fare, 
            },
            {
                where: {
                    id,
                },
            }
        )
        .then((data) => res.json({ msg: "Route updated."}))
        .catch((err) => {
            console.log(err);
            res.json({
                msg: "Error occured while updating route",
            });
        });
    }  else {
        res.json ({ msg: "Invalid route ID."});
    }
};

//Delete a route
exports.deleteRoute = async ( req, res) => {
    const { id } = req.body;

    let routeObject = await Route.findOne({ where: { id } });

    if (routeObject) {
        Route.destroy({
            where: {
                id, 
            },
        })
        .then((data) => res.json({ msg: "Route deleted."}))
        .catch((err) => {
            console.log(err);
            res.json({
                msg: "Error occured while deleting route.",
            });
        });
    } else {
        res.json({msg: "Invalid route ID."});
    }
};

