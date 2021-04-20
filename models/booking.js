
module.exports =(sequelize, DataTypes) => {
    const Booking = sequelize.define("Booking", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      bus_number: {
        type: DataTypes.STRING
      },
      type:{
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
      routeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'routes',
          key: 'id'
        },
        allowNull: false
      },
      bus_timeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'bus_times',
          key: 'id'
        },
        allowNull: false
      },
      passengerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'passengers',
          key: 'id'
        },
        allowNull: false
      },
      driverId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drivers',
          key: 'id'
        },
        allowNull: false
      },
      pickPointId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'points',
          key: 'id'
        },
        allowNull: false
      },
      dropPointId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'points',
          key: 'id'
        },
        allowNull: false
      },
      isCompleted:{
        type: DataTypes.INTEGER
      },
    });
  
    

    return Booking;
  };