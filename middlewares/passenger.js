const {Passenger, Route, Route_points, Bus, Point, Bus_time, Time } = require("../models");

//get all passengers
exports.getAllPassengers = (req, res) => {
    Passenger.findAll().then(passengers => res.json(passengers));
};

 //create a passenger
 exports.createPassenger = (req, res) => {
     const {
        name,
        email,
        phone,
        company } = req.body; 

         
        Passenger.create({
        name,
        email,
        phone,
        company,
})
        .then((passengers) => res.json({passengers}))
        .catch((err) => console.log(err));
};
 

 

