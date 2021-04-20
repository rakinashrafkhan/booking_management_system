module.exports =(sequelize, DataTypes) => {
    const Bus_time = sequelize.define("Bus_time", {
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
      busId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'buses',
          key: 'id'
        },
        allowNull: false
      },
      timeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'times',
          key: 'id'
        },
        allowNull: false
      },
    });
    
    Bus_time.belongsTo(sequelize.models.Bus,{
      foreignKey:"busId",
      onDelete:"CASCADE"
    })
    
    Bus_time.hasMany(sequelize.models.Booking,{
      foreignKey:"bus_timeId",
      onDelete:"CASCADE"
    });


    return Bus_time;
  };