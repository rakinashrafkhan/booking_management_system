"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Points",
			[
				{
					point_name: "Mohakhali",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "Banani",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "Kakoli",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "Shewra",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					point_name: "Bisshoroad",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Points", null, {});
	},
};