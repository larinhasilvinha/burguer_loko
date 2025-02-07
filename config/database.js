const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'hamburgueria.sqlite',
});

module.exports = sequelize;
