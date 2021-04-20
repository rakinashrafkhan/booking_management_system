module.exports =(sequelize, DataTypes) => {
  const Passenger = sequelize.define("Passenger", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    email: {
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
  Passenger.hasMany(sequelize.models.Booking,{
    foreignKey:"passengerId",
    onDelete:"CASCADE"
  })
  
  return Passenger;
};