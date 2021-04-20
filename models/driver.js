module.exports =(sequelize, DataTypes) => {
  const Driver = sequelize.define("Driver", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.INTEGER
    },
    company: {
      type: DataTypes.STRING
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

  Driver.hasMany(sequelize.models.Bus,{
    foreignKey:"driverId",
    onDelete:"CASCADE"
  })
  Driver.hasOne(sequelize.models.Booking,{
    foreignKey:"driverId",
    onDelete:"CASCADE"
  })
  return Driver;
};