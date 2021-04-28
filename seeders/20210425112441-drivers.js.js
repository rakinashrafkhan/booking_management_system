"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Drivers",
			[
				{
					name: "Rafique",
					phone: "012345",
					password:"789456",
					company: "alif",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Shihab",
					phone: "012789",
					password:"789456",
					company: "akik",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Anis",
					phone: "012123",
					password:"789456",
					company: "projapoti",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Mimshad",
					phone: "123345",
					password:"789456",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Kiron",
					phone: "123445",
					company: "BRTC",
					password:"789456",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Drivers", null, {});
	},
};