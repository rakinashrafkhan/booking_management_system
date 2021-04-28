module.exports =(sequelize, DataTypes) => {
  const Route = sequelize.define("Route", {
    
    route_name: {
      type: DataTypes.STRING,
      allowNull: false,
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
    onDelete:"SET NULL"
  })
  Route.hasMany(sequelize.models.Booking,{
    foreignKey:"routeId",
    onDelete:"SET NULL"
  })
 


  return Route;
};