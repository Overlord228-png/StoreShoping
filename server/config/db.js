const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    'StoreShoping', 
    'root', 
    '', 
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

module.exports = sequelize;