'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('covids', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      fips: {
        type: Sequelize.INTEGER
      },
      cases: {
        type: Sequelize.INTEGER
      },
      deaths: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('covids');
  }
};