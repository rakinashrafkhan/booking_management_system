const { Time, sequelize } = require("../models");
const moment = require("moment");

//Get all times
exports.getTimes = (req, res) => {
    Time.findAll().then((times) => res.json({ times }));
};

//Create a time
exports.createTime = (req, res) => {
    const { time } = req.body;

    sequelize.query(
         "INSERT INTO times (time, createdAt, updatedAt) VALUES (STR_TO_DATE(?, '%l:%i %p'), ?, ?)",
         {
             replacements: [time, new Date(), new Date()],
             type: sequelize.QueryTypes.INSERT,
         }
    ).then((time) => {
        res.json({ msg: "Time added to database."});
    })
    .catch((err) => {
        console.log(err);
        res.json({
            msg: "Error while adding to database. Check console.", 
        });
    });
}
//Update a time
exports.updateTime = async (req, res) => {
    const { id, time } = req.body;

    let timeObject = await Time.findOne({ where: { id }});
    let timeInHours = moment(time, "HH:mm a").format("HH:mm:ss");

    if (timeObject) {
        Time.update(
            {
                time: timeInHours,
            },
            {
                where: {id,},
            }
        ).then((data) => res.json({msg: "Time updated"}))
         .catch((err) => {
             console.log(err);
             res.json({
                 msg: "Error occured while updating time",
             });
         });
    } else {
        res.json ({ msg: "Invalid time ID"});
    }
};

//Delete a time
exports.deleteTime = async (req, res) => {
    const { id } = req.body;

    let timeObject = await Time.findOne({ where: { id }});

    if (timeObject) {
        Time.destroy({
            where: { id, },
        })
        .then((data) => res.json({ msg: "Time deleted."}))
        .catch((err) => {
            console.log(err);
            res.json({
                msg: "Error occured while deleting time.",
            });
        });
    } else {
        res.json({ msg: "There is no such time ID"});
    }
};
