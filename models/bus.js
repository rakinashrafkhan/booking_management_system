module.exports =(sequelize, DataTypes) => {
    const Bus = sequelize.define("Bus", {
      
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bus_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      /*routeId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'routes',
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
      },*/
    });

     
    
    return Bus;
  };