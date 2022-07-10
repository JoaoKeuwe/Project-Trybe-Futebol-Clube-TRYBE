'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.createTable('teams' , {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      autoIncrement: true,
    },
    home_team: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    home_team_goals: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    away_team: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    away_team_goals: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    in_progress: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teams');
  }
};
