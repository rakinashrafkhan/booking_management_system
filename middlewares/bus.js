const {Bus, Route, Time, Driver, Bus_time} = require("../models");

//get all buses
exports.getAllBuses = (req, res) => {
    Bus.findAll().then((buses) => res.json({buses}));
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

    console.log(1)
    let routeExits = await Route.findOne({ where: {id: routeId}});
    console.log(2)
    let driverExits = await Driver.findOne({where: {id: driverId}});
    console.log(3)
    let timeExits = await Time.findOne({where: {id: timeId}});
    console.log(4)

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

        console.log(6)

        let busTimeObject =await Bus_time.create({
            busId: busObject.id,
            timeId: timeId,
        });

        console.log(7)

        console.log(busObject);
        console.log(busTimeObject);

        res.json({ busObject });

    } catch (error) {
        res.json({error});
    }
};
 

 

