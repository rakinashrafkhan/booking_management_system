module.exports =(sequelize, DataTypes) => {
    const Route_point = sequelize.define("Route_point", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
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
      routeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'routes',
          key: 'id'
        },
        allowNull: false
      },
      pointId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'points',
          key: 'id'
        },
        allowNull: false
      },
    });

    Route_point.belongsTo(sequelize.models.Route,{
      foreignKey:"routeId",
      onDelete:"CASCADE"
    })
    
    return Route_point;
  };