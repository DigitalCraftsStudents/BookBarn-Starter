'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Books', 
      'user_id', {
        type: Sequelize.INTEGER, 
        allowNull: false, 
        defaultValue: 1, 
        references: {
          model: 'Users', 
          key: 'id'
        }
      } 

    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Books',
      'user_id'
    )
  }
};
