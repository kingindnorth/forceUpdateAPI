const Sequelize = require('sequelize');

const sequelize = new Sequelize('testDB', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.model = require("../models/versionAndroid") (sequelize, Sequelize)

module.exports = db