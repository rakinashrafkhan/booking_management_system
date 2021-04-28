module.exports =(sequelize, DataTypes) => {
  const Point = sequelize.define("Point", {
    
    point_name: {
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

  
  


  
  return Point;
};