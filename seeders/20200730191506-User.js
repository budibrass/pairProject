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
   return queryInterface.bulkInsert('Users', 
    [
      {
        name: 'User2',
        username: 'User',
        email: 'User@gmail.com',
        password: 'User',
        gender: 'Wanita',
        hp: '081234567890',
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
          name: 'User3',
          username: 'User',
          email: 'User@gmail.com',
          password: 'User',
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
    return queryInterface.bulkDelete('Users', null, {});
  }
};
