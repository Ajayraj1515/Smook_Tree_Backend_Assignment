module.exports = (sequelize, Sequelize) => {
    const Address = sequelize.define('Address', {
      address: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
    return Address;
  };
  