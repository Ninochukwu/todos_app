export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        name: "Nino",
        email: "nino@test.com",
        password: "password123",
        id: "a1b2c3d4-e5f6-7890-ab12-34567890cdef" ,
      },
      {
        name: "Alice",
        email: "alice@test.com",
        password: "password123",
        id: "7d3c8f1c-9e21-442b-b92d-ff1f8eac7e02",
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
