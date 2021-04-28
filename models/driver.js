module.exports =(sequelize, DataTypes) => {
  const Driver = sequelize.define("Driver", {
    
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
			unique: true,
    },
    password: {
			type: DataTypes.STRING,
			// allowNull: false,
			// validate: {
			// 	notEmpty: true,
			// },
		},
    company: {
      type: DataTypes.STRING,
      allowNull: true,
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

  Driver.hasOne(sequelize.models.Bus,{
    foreignKey:"driverId",
    onDelete:"SET NULL"
  });
  Driver.hasMany(sequelize.models.Booking,{
    foreignKey:"driverId",
    onDelete:"SET NULL"
  });
  return Driver;
};