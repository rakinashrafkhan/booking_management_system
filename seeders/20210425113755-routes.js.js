  
"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Routes",
			[
				{
					route_name: "MOHAMMADPUR-UTTARA",
					fare: 150,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					route_name: "DHANMONDI-BANANI",
					fare: 120,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					route_name: "SHAHBAGH-UTTARA",
					fare: 180,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Routes", null, {});
	},
};