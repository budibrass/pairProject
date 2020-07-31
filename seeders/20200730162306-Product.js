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
   return queryInterface.bulkInsert('Products', 
   [
     {
       category: 'HP',
       name: 'Samsung S10',
       stock: '10',
       price: 10000000,
       AdminId: 1,
       createdAt : new Date(),
       updatedAt : new Date()
     },
     {
      category: 'HP',
      name: 'Samsung A70',
      stock: '8',
      price: 5000000,
      AdminId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      category: 'HP',
      name: 'Iphone X',
      stock: '9',
      price: 12000000,
      AdminId: 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      category: 'HP',
      name: 'Oppo Find X',
      stock: '6',
      price: 7000000,
      AdminId: 1,
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
    return queryInterface.bulkDelete('Products', null, {});
  }
};
