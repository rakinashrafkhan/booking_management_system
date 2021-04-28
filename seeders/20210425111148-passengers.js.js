"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			"Passengers",
			[
				{
					name: "Ricky",
					email: "ricky@demo.com",
					phone: "012345",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Ponting",
					email: "ponting@demo.com",
					password:"147852",
					phone: "012789",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Sachin",
					email: "sachin@demo.com",
					password:"147852",
					phone: "012123",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Bruno",
					email: "bruno@demo.com",
					password:"147852",
					phone: "123345",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: "Fernandes",
					email: "fernandes@demo.com",
					password:"147852",
					phone: "123445",
					company: "shuttle",
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete("Passengers", null, {});
	},
};