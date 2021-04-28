const {
    Booking, 
    Bus, 
    Route,
    Driver,
    Bus_time, 
    Passenger,
    Point,
} = require("../models");
const jwtdecode = require("jwt-decode");

//Get all bookings
exports.getAllBookings = (req, res) => {
    Booking.findAll().then((bookings) => res.json({ bookings }));
};

//Create a booking
exports.createBooking = async (req, res) => {
    const { bus_timeId, passengerId, date } = req.body;

    const decoded = jwtdecode(req.headers["authorization"]);
    const user = decoded.user;

    if (user.userType !== "passenger") {
        return res.json({
            msg: "Access not allowed for this user type.",
        });
    }

    
    let busTimeObject = await Bus_time.findOne({
        where: { id: bus_timeId },
    });

    let passengerObject = await Passenger.findOne({
        where: { id: passengerId },
    });

    if(!busTimeObject || !passengerObject) {
        return res.json({
            msg: "Invalid bus_time/passenger selection.",
        });
    }

    let busObject = await Bus.findOne({
        where: { id: busTimeObject.busId },
    });
    // console.log(busObject);

    try {
        console.log(1)
        let routeObject = await Route.findOne({
            where: { id: busObject.routeId },
        });
        // console.log(routeObject);
        console.log(2)
        let driverObject = await Driver.findOne({
            where: { id: busObject.driverId },
        });
        // console.log(driverObject);
        console.log(3)
        let pickPoint = routeObject.route_name.split("-")[0];
        // console.log(pickPoint);
        console.log(4)
        let dropPoint = routeObject.route_name.split("-")[1];
        // console.log(dropPoint);
        console.log(5)

        let pickPointObject = await Point.findOne({
            where: { point_name: pickPoint },
        });
        // console.log(pickPointObject);
        console.log(6)
        let dropPointObject = await Point.findOne({
            where: { point_name: dropPoint },
        });
        console.log(7)
        // console.log(dropPointObject);

        let bookingObject = await Booking.create({
            routeId: routeObject.id,
            bus_timeId,
            passengerId,
            driverId: driverObject.id,
            pickPointId: pickPointObject.id,
            dropPointId: dropPointObject.id,
            date,
            isCompleted: false,
        });

        console.log(8)
        // console.log(bookingObject);

        res.json({ bookingObject });
    } catch (error) {
        res.json({ error });
    }
};

//Get passenger booking
exports.getAllBookings = (req, res) => {
    const { passengerId } = req.body;

    Booking.findAll({ where: { passengerId }}).then((bookings) =>
    res.json({ bookings })
    );
};

//Sort passenger booking according to date
exports.getAllBookingsDateSort = (req, res) => {
    //const { passengerId } = req.body;

    const decoded = jwtdecode(req.headers["authorization"]);
    const user = decoded.user;

    if (user.userType !== "passenger") {
        return res.json({
            msg: "Access not allowed for this user type.",
        });
    }

    Booking.findAll({
        where: { passengerId: user.id },
        order: [["date", "ASC"]],
    }).then((bookings) => res.json({ bookings }));
};

//Cancel Booking
exports.cancelBooking = async (req, res) => {
    const { bookingId, passengerId } = req.body;

    const decoded = jwtdecode(req.headers["authorization"]);
    const user = decoded.user;

    if (user.userType !=="passenger") {
        return res.json({
            msg: "Access denied for your user type.",
        });
    }

    let bookingObject = await Point.findOne({
        where: { id: bookingId },
    });

    if (bookingObject) {
        Booking.destroy({
            where: {
                id: bookingId,
            },
        })
            .then((data) => res.json({ msg: "Booking deleted." }))
            .catch((err) => {
                console.log(err);
                res.json({
                    msg: "Error occured while deleting booking.",
                });
            });
    } else {
        res.json({ msg: "Invalid booking ID." });
    }
};