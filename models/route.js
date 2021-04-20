module.exports =(sequelize, DataTypes) => {
  const Route = sequelize.define("Route", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    route_name: {
      type: DataTypes.STRING
    },
    fare: {
      type: DataTypes.INTEGER
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

  
  Route.hasMany(sequelize.models.Bus,{
    foreignKey:"routeId",
    onDelete:"CASCADE"
  })
  Route.hasMany(sequelize.models.Booking,{
    foreignKey:"routeId",
    onDelete:"CASCADE"
  })
  Route.belongsTo(sequelize.models.Point,{
    foreignKey:"pointId",
    onDelete:"CASCADE"
  })


  return Route;
};