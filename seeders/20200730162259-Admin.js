'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   return queryInterface.bulkInsert('Admins', 
    [
      {
        name: 'Admin',
        username: 'Admin',
        email: 'Admin@gmail.com',
        password: 'Admin',
        gender: 'Pria',
        hp: '081234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Admins', null, {});
  }
};
