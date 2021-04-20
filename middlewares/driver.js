const {Driver} = require("../models");
const  {Passenger, 
        Route, 
        Route_points, 
        Point, 
        Bus, 
        Bus_time, 
        Time, 
        Booking, } = require("../models");  

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
        .then((drivers) => res.json({drivers}))
        .catch((err) => console.log(err));
        };
 

 

