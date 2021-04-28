const {Passenger, 
       Route, 
       Route_point, 
       Bus, 
       Point, 
       Bus_time, 
       Time } = require("../models");

const jwt = require("jsonwebtoken");
const jwtdecode = require("jwt-decode");


//get all passengers
exports.getPassengers = (req, res) => {
    Passenger.findAll().then(passengers => res.json(passengers));
};

 //create a passenger
 exports.createPassenger = (req, res) => {
     const {
        name,
        email,
        phone,
        company,  
        password } = req.body; 

         
        Passenger.create({
        name,
        email,
        phone,
        company,
        password
})
        .then((passenger) => res.json({passenger}))
        .catch((err) => console.log(err));
};


//Route search
exports.searchRoute = async (req, res) => {
    const { pickPointId, dropPointId } = req.body;

    let routes = [];

    let pickPointObject = await Point.findOne({
        where: { id: pickPointId },
    });
    let dropPointObject = await Point.findOne({
        where: { id: dropPointId },
    });

    let routeName = 
        pickPointObject.point_name + "-" + dropPointObject.point_name;
    
    let routeObjects = await Route.findAll({
        where: { route_name: routeName },
    });

    for (const route of routeObjects) {
        let routePoint = await Route_point.findAll({
            where: { routeId: route.id },
        });
        let busObjects = await Bus.findAll({
            where: {routeId: route.id },
        });
        
        let routeBuses = [];

        for(const bus of busObjects) {
            let busTimeObject = await Bus_time.findOne({
                where: { busId: bus.id },
            });
            let timeObject = await time.findOne({
                where: { id: busTimeObject.timeId },
            });

            let busDetail = {
                busName: bus.name,
                startingTime: timeObject.time,
            };

            routeBuses.push(busDetail);
        }

        let totalRoute = "";

        for (const [index, routePoint] of routePoint.entries()) {
            let pointObject = await Point.findOne({
                where: { id: routePoint.pointId },
            });

            totalRoute = totalRoute + pointObject.point_name;

            if (index != routePoint.length - 1) {
                totalRoute = totalRoute + "-";
            }
        }

        let routeDetails = {
            totalRoute: totalRoute,
            fare: route.fare,
            routeBuses,
        };

        routes.push(routeDetails);
    }

    if (routes.length === 0) {
        return res.json({ msg: "No such route is present."});
    }

    res.json({ routes });
};

//Login

exports.login = async (req, res) => {
    const { email, password } = req.body;

    let passenger = await Passenger.findOne({
        where: { email, password },
    });

    if (passenger) {
        passenger.dataValues["userType"] = "passenger";

        console.log(passenger);

        jwt.sign({ user: passenger }, "secretkey", (err, token) => {
            res.json({
                token, 
            });
        });
    } else {
        res.json({ msg: "Incorrect Email/password."});
    }
};
 

 

