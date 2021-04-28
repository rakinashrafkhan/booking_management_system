module.exports =(sequelize, DataTypes) => {
    const Route_point = sequelize.define("Route_point", {
      
      routeId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Route,
          key: 'id'
        },
        allowNull: false
      },
      pointId: {
        type: DataTypes.INTEGER,
        references: {
          model: sequelize.models.Point,
          key: 'id'
        },
        allowNull: false
      },
    });

    Route_point.belongsTo(sequelize.models.Route,{
      foreignKey:"routeId",
      onDelete:"CASCADE"
    })

    Route_point.belongsTo(sequelize.models.Point, {
      foreignKey: "pointId",
      onDelete: "CASCADE",
    });
    
    return Route_point;
  };