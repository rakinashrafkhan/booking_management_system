module.exports =(sequelize, DataTypes) => {
  const Passenger = sequelize.define("Passenger", {
    
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
			type: DataTypes.STRING,
			// allowNull: false,
			// validate: {
			// 	notEmpty: true,
			// },
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
    onDelete:"SET NULL"
  })
  
  return Passenger;
};