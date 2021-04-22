const {Driver} = require("../models");
const  {Passenger, 
        Route, 
        Route_points, 
        Point, 
        Bus, 
        Bus_time, 
        Time, 
        Booking, } = require("../models");  


const jwt = require("jsonwebtoken");
const jwtdecode = require("jwt-decode");

//get all drivers
exports.getAllDrivers = (req, res) => {
    Driver.findAll().then(drivers => res.json(drivers));
};

 //create a driver
 exports.createDriver = (req, res) => {
     const {
        name,
        phone,
        company } = req.body; 

         
        Driver.create({
        name,
        phone,
        company,
})
        .then((driver) => res.json({driver}))
        .catch((err) => {
                res.json({ err: err.errors[0].message });
        
        console.log(err);
        });
 };
 
 //See driver bookings
 exports.getBookings = async (req, res) => {
         const decoded = jwtdecode(req.headers["authorization"]);
         const user = decoded.user;

         if (user.userType !== "driver") {
                 return res.json({
                         msg: "Access denied.",
                 });
         }

         const bookings = await Booking.findAll({
                 where: { driverId: user.id },
         });

         res.json({ bookings });
 };

 //See driver buses
 exports.getBuses = async (req, res) => {

        const decoded = jwtdecode(req.headers["authorization"]);
        const user = decoded.user;

        if(user.userType !== "driver") {
                return res.json({
                        msg: "Access denied.",
                });
        }
        
        const busObjects = await Bus.findAll({
                where: { driverId: user.id },
        });

        let buses = [];

        for (const bus of busObjects) {
                const routeObject = await Route.findOne({
                        where: { id: bus.routeId },
                });
                const busTimeObject = await Bus_time.findOne({
                        where: { busId: bus.id },
                });
                const timeObject = await Time.findOne({
                        where: { id: busTimeObject.timeId },
                });

                let busDetails = {
                        name: bus.name,
                        bus_number: bus.bus_number,
                        route: routeObject.route_name,
                        startingTime: timeObject.time,
                };

                buses.push(busDetails);
        }


        res.json({ buses });
};

//Login
exports.login = async (req, res) => {
        const { phone, password } = req.body;

        let driver = await Driver.findOne({
                where: { phone, password },
        });

        if (driver) {
                driver.dataValues["userType"] = "driver";

                console.log(driver);

                jwt.sign({ user: driver }, "secretkey", (err, token) => {
                        res.json({
                                token, 
                        });
                });
        } else {
                res.json({msg: "Your Email/password is incorrect. "});
        }
};

 

