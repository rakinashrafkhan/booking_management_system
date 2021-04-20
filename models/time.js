module.exports =(sequelize, DataTypes) => {
  const Time = sequelize.define("Time", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    time: {
      type: DataTypes.TIME
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
  });
  Time.hasMany(sequelize.models.Bus_time,{
    foreignKey:"timeId",
    onDelete:"CASCADE"
  })
  
  Time.hasMany(sequelize.models.Booking,{
    foreignKey:"pickPointId",
    onDelete:"SET NULL"
  })
  Time.hasMany(sequelize.models.Booking,{
    foreignKey:"dropPointId",
    onDelete:"SET NULL"
  })

  return Time;
};