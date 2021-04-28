const express = require("express"); 
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const passengerRoutes = require("./routes/passenger");
const driverRoutes = require("./routes/driver");
const busRoutes = require("./routes/bus");
const routeRoutes = require("./routes/route");
const pointRoutes = require("./routes/point");
const timeRoutes = require("./routes/time");
const routePointRoutes = require("./routes/routePoints");
const bookingRoutes = require("./routes/booking");


app.use("/api/passenger", passengerRoutes);
app.use("/api/driver", driverRoutes);
app.use("/api/bus", busRoutes);
app.use("/api/route", routeRoutes);
app.use("/api/point", pointRoutes);
app.use("/api/time", timeRoutes);
app.use("/api/routePoint/", routePointRoutes);
app.use("/api/booking/", bookingRoutes);



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("server running");
    });
});