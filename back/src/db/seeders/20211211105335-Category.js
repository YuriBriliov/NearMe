'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //  * Add seed commands here.
    //  *
    //  * Example:
      await queryInterface.bulkInsert('Categories', [
        {
          icon: 'fas fa-hand-paper fa-3x',
          title: 'nails',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-eye fa-3x',
          title: 'brows',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          icon: 'fas fa-grin-hearts fa-3x',
          title: 'make up',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
