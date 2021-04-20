const {Bus, Route, Time, Driver, Bus_time} = require("../models");

//get all buses
exports.getAllBuses = (req, res) => {
    Bus.findAll().then(buses => res.json(buses));
};

 //create a bus
 exports.createBus = async (req, res) => {
     const {
        name,
        bus_number,
        type,
        routeId,
        driverId,
        timeId,    
    } = req.body; 

    let routeExits = await Route.findOne({ where: {id: routeId}});
    let driverExits = await Driver.findOne({where: {id: driverId},});
    let timeExits = await Time.findOne({where: {id: timeId}});

    if (!routeExits || !timeExits || !driverExits) {
        return res.json({msg: "Your driver/time/route selection is invalid"});
    }
    
    try {
        let busObject = await Bus.create({
            bus_number,
            name,
            type,
            routeId,
            driverId,
        });

        let busTimeObject = Bus_time.create({
            busId: busObject.id,
            timeId: timeId,
        });

        console.log(busTimeObject);

        res.json({ busObject });

    } catch (error) {
        res.json({error});
    }
};
 

 

