const {Route} = require("../models");

//get all routes
exports.getAllRoutes = (req, res) => {
    Route.findAll().then(routes => res.json(routes));
};

 //create a passenger
 exports.createRoute = (req, res) => {
     const {
        route_name,
        fare,
     } = req.body; 

         
        Route.create({
        route_name,
        fare,
})
        .then((routes) => res.json({routes}))
        .catch((err) => console.log(err));
        };
 

 

