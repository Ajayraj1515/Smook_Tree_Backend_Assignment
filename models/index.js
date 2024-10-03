const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user.model')(sequelize, Sequelize);
db.Address = require('./address.model')(sequelize, Sequelize);

db.User.hasMany(db.Address, { foreignKey: 'userId' });
db.Address.belongsTo(db.User, { foreignKey: 'userId' });

module.exports = db;
